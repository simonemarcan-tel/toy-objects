
   const toys = [ {
    id: 1,
    name: "Fire Truck",
    maker: "Fischer Toys",
    weight: 4,
    price: 5
},
{
    id: 2,
    name: "Car for Kids",
    maker: "Target",
    weight: 17,
    price: 70
},
{
    id: 3,
    name: "fake food for kitchen fun",
    maker: "Fischer Toys",
    weight: 2,
    price: 2

}
]
    
const yoyo = {
    id: 4,
    name: "Yo-Yo",
    maker: "mother",
    weight: 5,
    price: 12

}
const bear = {
    id: 5,
    name: "Stuffed Bear",
    maker: "grandmother",
    weight: 50,
    price: 15
}
toys.push(yoyo);
toys.push(bear);

{const toyToFind = 4;

    if (toy.id === toyToFind) {
        toy.price += toy.price * 0.05;
    }
console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars.`);
}


