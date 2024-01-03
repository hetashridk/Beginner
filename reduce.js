const numbers = [1, 2, 3]

const reduceNum = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue, 0);   //0 is intial value (intial value can be anything but int only), intially acccumulator will store the 0 and then store the cuurent value
// that is :-
// (0, 1) => 0 + 1
// (1, 2) => 1 + 2
// (3, 3) => 3 + 3
// so accumulator will return value 6
console.log(reduceNum);  


const shoppingCart = [
    {
        itemName: "Pen",
        price: 12
    },
    {
        itemName: "eraser",
        price: 20
    },
    {
        itemName: "scale",
        price: 10
    },
]

const cart = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(cart);