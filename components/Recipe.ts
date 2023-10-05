export type Ingredient = {
    name: string;
    amount: string;
    optional: boolean;
};

export type IngredientGroup = {
    name: string;
    ingredients: Ingredient[];
    optional: boolean;
};

export type Direction = {
    instruction: string;
    optional: boolean;
};

export type DirectionGroup = {
    name: string;
    directions: Direction[];
    optional: boolean;
};

export type Recipe = {
    name: string;
    ingredients: (Ingredient | IngredientGroup)[];
    directions: (Direction | DirectionGroup)[];
};