import {
  Ingredient,
  Ingredients,
  Direction,
  Directions,
  Grouping,
  Recipe,
} from "./Recipe";

const Ingredient = (ingredient: Ingredient) => {
  return (
    <li>
      {ingredient.amount} {ingredient.unit} {ingredient.name}
    </li>
  );
};

const Grouper = (group: Grouping, f: any) => {
  return (
    <>
      <h4 className="mb-1 text-lg">{group.heading}</h4>
      <ul>{group.items.map((item, idx) => f(item, idx))}</ul>
    </>
  );
};

const Ingredients = (ingredients: Ingredients) => {
  console.log(Array.isArray(ingredients));
  // return (
  //   <>
  //     <h3 className="mb-1 text-lg">Ingredients</h3>
  //     {ingredients.map((item, idx) => {
  //       if (item.type === "Ingredient") {
  //         return <Ingredient {...item} key={idx} />;
  //       } else {
  //         return <Grouper {...item} {...Ingredient} key={idx} />;
  //       }
  //     })}
  //   </>
  // );
};

const Procedure = (directions: Directions) => {
  return (
    <>
      <h3 className="mb-1 text-lg">Procedure</h3>
      <p>This is where the directions will go.</p>
    </>
  );
};

const Notes = (notes: string[]) => {
  return (
    <>
      <h3 className="mb-1 text-lg">Notes</h3>
      <p>This is where the notes will go.</p>
    </>
  );
};

export default function RecipeCard(props: { recipe: Recipe }) {
  const { name, ingredients, directions, notes } = props.recipe;
  console.log("Recipe props: ", props.recipe);
  // console.log(typeof ingredients)
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">{name}</h2>
      {/* <Ingredients {...ingredients} /> */}
      <Procedure {...directions} />
      {notes && <Notes {...notes} />}
    </div>
  );
}
