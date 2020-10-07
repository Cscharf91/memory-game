const Cards = [
    {
        id: 1,
        food: "Apple",
        img:
            "https://i.pinimg.com/originals/9f/2a/63/9f2a63d7fcf4f314800dd3f4f40c4a67.png"
    },
    {
        id: 2,
        food: "Banana",
        img:
            "https://cdn1.iconfinder.com/data/icons/food-111/512/bananas-512.png"
    },
    {
        id: 3,
        food: "Orange",
        img:
            "https://media.istockphoto.com/vectors/orange-fruit-icon-with-leaf-healthy-lifestyle-background-flat-design-vector-id469295496?k=6&m=469295496&s=170667a&w=0&h=mu5qyofSF2V6EsS5becdLMXGzp2lAMhfJiMHrzwtrlc="
    },
    {
        id: 4,
        food: "Peach",
        img:
            "https://cdn0.iconfinder.com/data/icons/fruit-filled/64/fruits-21-512.png"
    },
    {
        id: 5,
        food: "Grape",
        img:
            "https://www.inventicons.com/uploads/iconset/320/wm/512/Grapes-66.png"
    },
    {
        id: 6,
        food: "Pineapple",
        img:
            "https://cdn.iconscout.com/icon/free/png-512/pineapple-fruit-emoj-symbol-food-30674.png"
    },
    {
        id: 7,
        food: "Mango",
        img:
            "https://previews.123rf.com/images/anatolir/anatolir2001/anatolir200101512/137492696-mango-fruit-icon-cartoon-style.jpg"
    },
    {
        id: 8,
        food: "Cherry",
        img:
            "https://cdn1.iconfinder.com/data/icons/fruit-and-vegetables-13/512/cherry-512.png"
    },
    {
        id: 9,
        food: "Strawberry",
        img:
            "data:image/png;base64,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"
    },
    {
        id: 10,
        food: "Watermelon",
        img:
            "https://www.flaticon.com/svg/static/icons/svg/184/184515.svg"
    }
];

export default Cards;