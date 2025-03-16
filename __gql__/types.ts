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

export type Bucket = {
  __typename?: 'Bucket';
  email: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  user_by_ID?: Maybe<User>;
};


export type QueryUser_By_IdArgs = {
  ID: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  ID: Scalars['ID']['output'];
  buckets: Array<Bucket>;
};

export type GetBucketQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBucketQuery = { __typename?: 'Query', user_by_ID?: { __typename?: 'User', buckets: Array<{ __typename?: 'Bucket', email: string }> } | null };
