import { Interface } from "readline";

export type Ingredient = {
    type: "Ingredient";
    name: string;
    amount?: number;
    unit?: string;
    optional: boolean;
};

export type Direction = {
    type: "Direction";
    name: string;
    optional: boolean;
};

export type Grouping = {
    type: "Grouping";
    heading: string;
    items: (Ingredient | Direction)[];
    optional: boolean;
};

export type Ingredients = (Ingredient | Grouping)[];
export type Directions = (Direction | Grouping)[];

export type Recipe = {
    name: string;
    ingredients: (Ingredient | Grouping)[];
    directions: (Direction | Grouping)[];
    notes?: string[];
};