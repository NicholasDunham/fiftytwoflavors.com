import { defineDocumentType, defineNestedType, makeSource } from "@contentlayer/source-files";

const Ingredient = defineNestedType(() => ({
  name: 'Ingredient',
  fields: {
    name: { type: "string", required: true },
    amount: { type: "string", required: true },
    optional: { type: "boolean", required: true },
  },
}));

const IngredientGroup = defineNestedType(() => ({
  name: 'IngredientGroup',
  fields: {
    name: { type: "string", required: true },
    ingredients: { type: "list", of: Ingredient, required: true },
    optional: { type: "boolean", required: true },
  },
}));

const Direction = defineNestedType(() => ({
  name: 'Direction',
  fields: {
    instruction: { type: "string", required: true },
    optional: { type: "boolean", required: true },
  },
}));

const DirectionGroup = defineNestedType(() => ({
  name: 'DirectionGroup',
  fields: {
    name: { type: "string", required: true },
    directions: { type: "list", of: Direction, required: true },
    optional: { type: "boolean", required: true },
  },
}));

const Recipe = defineNestedType(() => ({
  name: 'Recipe',
  fields: {
    name: { type: "string", required: true },
    ingredients: { type: "list", of: [Ingredient, IngredientGroup], required: true },
    directions: { type: "list", of: [Direction, DirectionGroup], required: true },
  },
}));

const Update = defineNestedType(() => ({
  name: 'Update',
  fields: {
    date: { type: "date", required: true },
    content: { type: "markdown", required: true },
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
