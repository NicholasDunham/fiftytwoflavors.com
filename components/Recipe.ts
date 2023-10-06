export type Ingredient = {
    type: "Ingredient";
    name: string;
    amount?: number;
    unit?: string;
    optional: boolean;
};

export type IngredientGroup = {
    type: "IngredientGroup";
    heading: string;
    ingredients: Ingredient[];
    optional: boolean;
};

export type Direction = {
    type: "Direction";
    step: string;
    optional: boolean;
};

export type DirectionGroup = {
    type: "DirectionGroup";
    heading: string;
    steps: Direction[];
    optional: boolean;
};

export type Ingredients = (Ingredient | IngredientGroup)[];
export type Directions = (Direction | DirectionGroup)[];

export type Recipe = {
    name: string;
    ingredients: Ingredients;
    directions: Directions;
    notes?: string[];
};