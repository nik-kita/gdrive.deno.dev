import { gql } from "../__gql__/gql.ts";

gql(`
  query GetBucket {
    user_by_ID(ID: "asdf") {
      buckets {
        email
      }
    }
  }  
`);
