export const typeDefs = `
schema {
  query: Query
}

type Bucket {
  email: String!
}

type Query {
  user_by_ID(ID: ID!): User
}

type User {
  ID: ID!
  buckets: [Bucket!]!
}
`;
