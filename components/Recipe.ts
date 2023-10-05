type Ingredient = {
    name: string;
    amount: string;
    optional: boolean;
};

type IngredientGroup = {
    name: string;
    ingredients: Ingredient[];
    optional: boolean;
};

type Direction = {
    instruction: string;
    optional: boolean;
};

type DirectionGroup = {
    name: string;
    directions: Direction[];
    optional: boolean;
};

type Recipe = {
    name: string;
    ingredients: (Ingredient | IngredientGroup)[];
    directions: (Direction | DirectionGroup)[];
};