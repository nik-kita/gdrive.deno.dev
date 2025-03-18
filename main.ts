import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
// @ts-types="@as-integrations/cloudflare-workers/src/index.ts"
import { startServerAndCreateCloudflareWorkersHandler } from "@as-integrations/cloudflare-workers";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { serveDir } from "@std/http";
import { typeDefs } from "./schema.ts";

type Env = {};
type Context = {};

const apollo = new ApolloServer<Context>({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs }),
  }),
  introspection: true,
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ footer: false }),
  ],
});

const apollo_handler = startServerAndCreateCloudflareWorkersHandler<
  Env,
  Context
>(apollo, {
  context: async ({ env, request, ctx }) => {
    return {};
  },
});

const cache = await caches.open("app");

Deno.serve({
  port: 3000,
}, async (req) => {
  const url = new URL(req.url);

  if (url.pathname.startsWith("/graphql")) {
    return apollo_handler(req, {}, {});
  }

  const cached = await cache.match(req);

  if (cached) {
    return cached;
  }

  let res = await serveDir(req, {
    fsRoot: "spa/dist",
  });

  if (res.status == 404) {
    const index = new URL(req.url);
    index.pathname = "index.html";
    res = await serveDir(new Request(index, req), {
      fsRoot: "spa/dist",
    });
  }

  await cache.put(req, res.clone());

  return res;
});
