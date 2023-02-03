const pasta = {
    name: 'Tomato',
    toppings: 'cheese'
}

function pastaOrder({ name: pastaName, toppings: pastaToppings }: any) {
    console.log(pastaName, pastaToppings)
}

const { pastaName } : any = pastaOrder(pasta)