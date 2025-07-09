function tagFunction(array, ...args) {
    console.log(array);

    console.log(args);
}

test("tag function", () => {
    const name = "Anggy";
    const lastName = "Muhamad Yahya";

    tagFunction`Hello ${name} ${lastName}!, How are you?`;
    tagFunction`Bye ${name} ${lastName}!, See you later`;
});

test("Tag function SQL", () => {
    const name = "Anggyar";
    const age = 27;

    tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});
