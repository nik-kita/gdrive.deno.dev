import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
// @ts-types="@as-integrations/cloudflare-workers/src/index.ts"
import { startServerAndCreateCloudflareWorkersHandler } from "@as-integrations/cloudflare-workers";
import { typeDefs } from "./schema.ts";

type Env = {};
type Context = {};

const apollo = new ApolloServer<Context>({
  typeDefs,
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
    return { token: "secret" };
  },
});

Deno.serve({
  port: 3000,
}, async (req) => {
  return apollo_handler(req, {}, {});
});
