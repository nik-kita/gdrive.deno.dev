import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
export { DefaultApolloClient } from "@vue/apollo-composable";

const httpLink = createHttpLink({
  uri: import.meta.env.MODE === "production"
    ? "https://fstorage.deno.dev/graphql"
    : "http://localhost:3000/graphql",
});
const cache = new InMemoryCache({});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
