import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
// @ts-types="@as-integrations/cloudflare-workers/src/index.ts"
import { startServerAndCreateCloudflareWorkersHandler } from "@as-integrations/cloudflare-workers";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "hono/deno";
import { typeDefs } from "./schema.ts";

const app = new Hono();

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


app.use(cors());
app.use("/graphql", (c) => {
  return apollo_handler(c.req.raw, {}, {});
});
app.use(async (c, next) => {
  const cached = await cache.match(c.req.raw);

  if (cached) {
    return cached;
  }

  await next();
  await cache.put(c.req.raw, c.res.clone());
});
app.use(
  "*",
  serveStatic({
    root: "spa/dist",
  }),
);

Deno.serve({
  port: 3000,
}, app.fetch);
