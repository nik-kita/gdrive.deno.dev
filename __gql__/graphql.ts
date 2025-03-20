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
  _id: Scalars['ID']['output'];
  bucket: Bucket;
  bucket_id: Scalars['ID']['output'];
};

export type Bucket = {
  __typename?: 'Bucket';
  email: Scalars['String']['output'];
  keys: Array<ApiKey>;
  user: User;
  user_id: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  sign_in?: Maybe<Session>;
};


export type MutationSign_InArgs = {
  email: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
};

export type Session = {
  _id: Scalars['ID']['output'];
  type: SessionType;
};

export type SessionGhost = Session & {
  __typename?: 'SessionGhost';
  _id: Scalars['ID']['output'];
  type: SessionType;
};

export type SessionNormal = Session & {
  __typename?: 'SessionNormal';
  _id: Scalars['ID']['output'];
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
  _id: Scalars['ID']['output'];
  buckets: Array<Bucket>;
  sessions: Array<SessionNormal>;
};
