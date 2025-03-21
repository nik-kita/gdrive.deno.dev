export const typeDefs = `
schema {
  query: Query
  mutation: Mutation
}

type ApiKey {
  ID: ID!
  bucket: Bucket!
  bucketID: ID!
}

type Bucket {
  email: String!
  keys: [ApiKey!]!
  user: User!
  userID: ID!
}

type Mutation {
  signIn(email: String!): Session
}

type Query {
  me: User
}

interface Session {
  ID: ID!
  type: SessionType!
}

type SessionGhost implements Session {
  ID: ID!
  type: SessionType!
}

type SessionNormal implements Session {
  ID: ID!
  activeBucket: Bucket
  type: SessionType!
  user: User!
  userID: ID!
}

enum SessionType {
  GHOST
  NORMAL
}

type User {
  ID: ID!
  buckets: [Bucket!]!
  sessions: [SessionNormal!]!
}
`;
