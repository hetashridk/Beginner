// getOwnPropertyDescriptor has two parameter 
// first one - Math:- modue, object name etc
// second one - PI:- Property of that module, object etc

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("function doesn't work");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,    //if we write enumerable = fales then in iteration that is from line 28 to 33 we cannot see the name property
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}