import { defineDocumentType, defineNestedType, makeSource } from "@contentlayer/source-files";

const Ingredient = defineNestedType(() => ({
  name: 'Ingredient',
  fields: {
    name: { type: "string", required: true },
    amount: { type: "number", required: true },
    unit: { type: "string", required: false},
    optional: { type: "boolean", default: false },
  },
}));

const Direction = defineNestedType(() => ({
  name: 'Direction',
  fields: {
    step: { type: "string", required: true },
    optional: { type: "boolean", default: false },
  },
}));

const Grouping = defineNestedType(() => ({
  name: 'Grouping',
  fields: {
    heading: { type: "string", required: true },
    items: { type: "list", of: [Ingredient, Direction], required: true },
    optional: { type: "boolean", default: false },
  },
}));

const Recipe = defineNestedType(() => ({
  name: 'Recipe',
  fields: {
    name: { type: "string", required: true },
    ingredients: { type: "list", of: [Ingredient, Grouping], required: true },
    directions: { type: "list", of: [Direction, Grouping], required: true },
    notes: { type: "list", of: {type: "markdown"}, required: false },
  },
}));

const Update = defineNestedType(() => ({
  name: 'Update',
  fields: {
    date: { type: "date", required: true },
    description: { type: "markdown", required: true },
  },
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
    abstract: { type: "markdown", required: true },
    recipe: { type: "nested", of: Recipe, required: false },
    updates: {type: "list", of: Update, required: false},
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
