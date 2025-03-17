import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
// @ts-types="@as-integrations/cloudflare-workers/src/index.ts"
import { startServerAndCreateCloudflareWorkersHandler } from "@as-integrations/cloudflare-workers";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
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

Deno.serve({
  port: 3000,
}, async (req) => {
  return apollo_handler(req, {}, {});
});
