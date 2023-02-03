const pizza = {
    name: 'Blazing Inferno',
    price: 15,
    getName() {
        return this.name
    }
}

const toppings = ['pepperoni']

const order = {
    pizza,
    toppings
}

console.log(pizza.getName())