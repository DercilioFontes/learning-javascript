
const cart = [ {name: "Widget", price: 9.95}, { name: "Gadget", price: 22.95} ];

const names = cart.map(x => x.name);
console.log(names); // [ 'Widget', 'Gadget' ]

const prices = cart.map(x => x.price);
console.log(prices); // [ 9.95, 22.95 ]

const discountPrices = prices.map(x =>x*0.8);
console.log(discountPrices); // [ 7.96, 18.36 ]

const lcNames = names.map(x => x.toLowerCase());
console.log(lcNames); // [ 'widget', 'gadget' ]

// const lcNames2 = names.map(String.toLowerCase); // Not working
// console.log(lcNames); 


// 
const items = ["Widget", "Gadget"];
const prices2 = [9.95, 22.95];
const cart2 = items.map((x, i) => ({ name: x, price: prices2[i]}));
console.log(cart2);