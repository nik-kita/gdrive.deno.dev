/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ApiKey = {
  __typename?: 'ApiKey';
  ID: Scalars['ID']['output'];
  bucket: Bucket;
  bucketID: Scalars['ID']['output'];
};

export type Bucket = {
  __typename?: 'Bucket';
  email: Scalars['String']['output'];
  keys: Array<ApiKey>;
  user: User;
  userID: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  signIn?: Maybe<Session>;
};


export type MutationSignInArgs = {
  email: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
};

export type Session = {
  ID: Scalars['ID']['output'];
  type: SessionType;
};

export type SessionGhost = Session & {
  __typename?: 'SessionGhost';
  ID: Scalars['ID']['output'];
  type: SessionType;
};

export type SessionNormal = Session & {
  __typename?: 'SessionNormal';
  ID: Scalars['ID']['output'];
  activeBucket?: Maybe<Bucket>;
  type: SessionType;
  user: User;
  userID: Scalars['ID']['output'];
};

export enum SessionType {
  Ghost = 'GHOST',
  Normal = 'NORMAL'
}

export type User = {
  __typename?: 'User';
  ID: Scalars['ID']['output'];
  buckets: Array<Bucket>;
  sessions: Array<SessionNormal>;
};
