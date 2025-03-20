export const typeDefs = `
schema {
  query: Query
  mutation: Mutation
}

type ApiKey {
  _id: ID!
  bucket: Bucket!
  bucket_id: ID!
}

type Bucket {
  email: String!
  keys: [ApiKey!]!
  user: User!
  user_id: ID!
}

type Mutation {
  sign_in(email: String!): Session
}

type Query {
  me: User
}

interface Session {
  _id: ID!
  type: SessionType!
}

type SessionGhost implements Session {
  _id: ID!
  type: SessionType!
}

type SessionNormal implements Session {
  _id: ID!
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
  _id: ID!
  buckets: [Bucket!]!
  sessions: [SessionNormal!]!
}
`;
