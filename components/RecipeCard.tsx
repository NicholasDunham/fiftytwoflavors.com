import { contentDirExcludeDefault } from "contentlayer/source-files";
import { Recipe } from "./Recipe";

export default function RecipeCard(props: {
  children: React.ReactNode;
  recipe: Recipe;
}) {
  console.log("Recipe props: ", props);
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">Recipe</h2>
      {props.children}
    </div>
  );
}
