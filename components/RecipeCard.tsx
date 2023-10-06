import React, { FC } from "react";
import {
  Ingredient,
  Ingredients,
  IngredientGroup,
  Direction,
  Directions,
  DirectionGroup,
  Recipe,
} from "./Recipe";

const Section: FC<{ heading: string; children: React.ReactNode }> = ({
  heading,
  children,
}) => {
  return (
    <>
      <h3 className="mb-1 text-lg">{heading}</h3>
      <>{children}</>
    </>
  );
};

const Subsection: FC<{ heading: string; children: React.ReactNode }> = ({
  heading,
  children,
}) => {
  return (
    <>
      <h4 className="mb-1 text-md">{heading}</h4>
      <>{children}</>
    </>
  );
};

const Ingredient: FC<{ ingredient: Ingredient }> = (props) => {
  const { ingredient } = props;
  return (
    <li>
      {ingredient.amount}
      {ingredient.unit} {ingredient.name}
    </li>
  );
};

const Ingredients: FC<{ ingredients: Ingredients }> = (props) => {
  const { ingredients } = props;

  return (
    <Section heading="Ingredients">
      {ingredients.map((item, idx) => {
        if (item.type === "Ingredient") {
          return <Ingredient ingredient={item} key={idx} />;
        } else if (item.type === "IngredientGroup") {
          return (
            <Subsection heading={item.heading} key="idx">
              {item.ingredients.map((ingredient, idx) => (
                <Ingredient ingredient={ingredient} key={idx} />
              ))}
            </Subsection>
          );
        }
      })}
    </Section>
  );
};

const Procedure: FC<{ directions: Directions }> = (props) => {
  const { directions } = props;

  return (
    <>
      <h3 className="mb-1 text-lg">Procedure</h3>
      <p>This is where the directions will go.</p>
    </>
  );
};

const Notes: FC<{ notes: string[] }> = (props) => {
  return (
    <>
      <h3 className="mb-1 text-lg">Notes</h3>
      <p>This is where the notes will go.</p>
    </>
  );
};

export default function RecipeCard(props: { recipe: Recipe }) {
  const { name, ingredients, directions, notes } = props.recipe;
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">{name}</h2>
      <Ingredients ingredients={ingredients} />
      <Procedure directions={directions} />
      {notes && <Notes notes={notes} />}
    </div>
  );
}
