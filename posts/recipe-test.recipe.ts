export const recipe: Recipe = {
    name: "Test Recipe",
    ingredients: [
        {
            name: "Test Ingredient",
            amount: "1",
            optional: false,
        },
        {
            name: "Test Ingredient Group",
            ingredients: [
                {
                    name: "Test Ingredient 1",
                    amount: "1",
                    optional: false,
                },
                {
                    name: "Test Ingredient 2",
                    amount: "2",
                    optional: false,
                },
            ],
            optional: false,
        },
    ],
    directions: [
        {
            instruction: "Test Direction",
            optional: false,
        },
        {
            name: "Test Direction Group",
            directions: [
                {
                    instruction: "Test Direction 1",
                    optional: false,
                },
                {
                    instruction: "Test Direction 2",
                    optional: false,
                },
            ],
            optional: false,
        },
    ],
}