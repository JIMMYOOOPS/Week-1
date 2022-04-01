// Assignment 2 Function, Array and Object

let productlist = {
    size:3,
    products:[
    {
        name:"Product 1",
        price:100
    },
    {
        name:"Product 2",
        price:700
    },
    {
        name:"Product 3",
        price:250
    }
    ]
};

let data = productlist.products;

function avg(data) {
    let priceavg = 0;
    let pricesum = 0
    for(let i = 0; i < data.length; i++) {
        pricesum = pricesum + data[i].price
    }
    priceavg = pricesum / data.length;
    return priceavg;
}

console.log(avg(data))