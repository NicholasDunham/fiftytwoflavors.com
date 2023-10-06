import type { FC, ReactNode } from "react";

export const Section: FC<{ heading: string; children: ReactNode }> = ({
  heading,
  children,
}) => {
  return (
    <>
      <h3 className="mb-1 text-lg">{heading}</h3>
      {children}
    </>
  );
};

export const Subsection: FC<{ heading: string; children: ReactNode }> = ({
  heading,
  children,
}) => {
  return (
    <>
      <h4 className="mb-1 text-md">{heading}</h4>
      {children}
    </>
  );
};

export const RecipeCard: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">Recipe</h2>
      {children}
    </div>
  );
};
