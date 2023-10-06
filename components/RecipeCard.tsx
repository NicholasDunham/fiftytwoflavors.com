import type { FC, ReactNode } from "react";
import type {
  Ingredient,
  Ingredients,
  Direction,
  Directions,
  Recipe,
} from "./Recipe";

const Section: FC<{ heading: string; children: ReactNode }> = ({
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

const Subsection: FC<{ heading: string; children: ReactNode }> = ({
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

const Ingredient: FC<{ ingredient: Ingredient }> = ({ ingredient }) => {
  return (
    <li>
      {ingredient.amount}
      {ingredient.unit} {ingredient.name}
    </li>
  );
};

const Ingredients: FC<{ ingredients: Ingredients }> = ({ ingredients }) => {
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

const Direction: FC<{ direction: Direction }> = ({ direction }) => {
  return <li>{direction.step}</li>;
};

const Procedure: FC<{ directions: Directions }> = ({ directions }) => {
  return (
    <Section heading="Procedure">
      {directions.map((item, idx) => {
        if (item.type === "Direction") {
          return <Direction direction={item} key={idx} />;
        } else if (item.type === "DirectionGroup") {
          return (
            <Subsection heading={item.heading} key="idx">
              {item.steps.map((direction, idx) => (
                <Direction direction={direction} key={idx} />
              ))}
            </Subsection>
          );
        }
      })}
    </Section>
  );
};

const Notes: FC<{ notes: string[] }> = ({ notes }) => {
  return (
    <Section heading="Notes">
      {notes.map((note, idx) => (
        <p key={idx}>{note}</p>
      ))}
    </Section>
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
