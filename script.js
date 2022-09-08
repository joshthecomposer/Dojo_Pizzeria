const crustTypes = ["deep dish", "thin crust", "hand-tossed", "stuffed crust"]
const sauceTypes = ["traditional", "white garlic sauce", "marinara", "alfredo"]
const cheeseTypes = ["mozzarella", "feta", "literally just a slice of american cheese thrown on top", "gouda", "parmesan", ""]
const toppingTypes = ["sausage", "pepperoni", "canadian bacon", "pineapple", "green peppers", "just some random scraps off the floor"]

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza
}

function randomPizza() {

    let crust = crustTypes[Math.floor(Math.random() * crustTypes.length)]
    let sauce = sauceTypes[Math.floor(Math.random() * sauceTypes.length)]
    let cheese = getToppings(cheeseTypes);
    let topping = getToppings(toppingTypes);

    return pizzaOven(crust, sauce, cheese, topping)
}

function getToppings(arr) {
    let topping = []
    let num = Math.floor(Math.random() * arr.length)
    for (let i = 0; i <= num; i++) {
        topping.push(arr[Math.floor(Math.random() * arr.length)])
    }
    topping = [...new Set(topping)];
    return topping;
}

console.log(randomPizza());