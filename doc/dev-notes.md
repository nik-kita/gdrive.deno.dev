## Graphql support

- Adding `.ts` extensions for smooth Deno experience without sloppy imports is
  made in non-standard way by script
  [../scripts/post-generate.ts](../scripts/post-generate.ts)
- Also in this script the content of [../schema.gql](../schema.gql) is copied
  into [../schema.ts](../schema.ts) file as typescript string
- The type of `startServerAndCreateCloudflareWorkersHandler` from
  `@as-integrations/cloudflare-workers` in [../main.ts](../main.ts) is used
  explicit type-comment that is pointed to `esm` version of imported target
  instead of incorrect actual `cjs`
