import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
export { DefaultApolloClient } from "@vue/apollo-composable";

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql",
});
const cache = new InMemoryCache({});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
