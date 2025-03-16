import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: ["src/**/*.gql"],
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./__gql__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
    "./__gql__/types.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
    "./schema.gql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },

  ignoreNoDocuments: true,
};

export default config;
