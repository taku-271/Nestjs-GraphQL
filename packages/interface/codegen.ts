import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "src/schema.graphql",
  documents: ["src/documents/*.graphql"],
  generates: {
    "../backend/src/graphql/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        useIndexSignature: true,
        contextType: "../context#Context",
      },
    },
    "../frontend/src/graphql/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
};

export default config;
