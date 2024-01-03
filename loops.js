// for of loop
// in for of lopp we will get values directly

const arr1 = [1, 2, 3, 4, 5]
for (const i of arr1) {   //i:- iterator, arr1/string etc
    console.log(i);
}

const greeting = "Yoo good morning"
for (const greet of greeting) {
    console.log(`It will print ezch char ${greet} including space`);
    
}


// Map
// key-value
// store unique
// ordered
const map = new Map()
map.set("Hetu" , "Hetashri")
map.set("Harshu" , "Harshal")
map.set("Mahu" , "Mahek")

console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key] of map) {   //[key] will only print key
    console.log(key);
}

for (const [key, value] of map) {   //will print both
    console.log(`${key} :- ${value}`);
}


// object not iterable using for of loop

// for object use for in loop
const myObject = {
    name: "Hetashri",
    surname: "Kansariwala",
    contact: 123456789,
    greeting: "Yoo"
}

for (const key in myObject) {
    console.log(`key:- ${key} and its values is ${myObject[key]}`);
}

// in for in loop we will key 

//for in loop is use for array too
for (const key in arr1) {
    console.log(`values is ${arr1[key]}`);
}

// foreach
arr1.forEach(function (item){
    console.log(item);
})

// foreach using arrow function
arr1.forEach( (item) => {
    console.log(`foreach using arrow ${item}`);
})

function print(item) {
    console.log(`foreach using user defined function ${item}`); 
}
arr1.forEach(print)

//except item foreach has other two parameter
arr1.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const arrayObject = [
    {
        year: "first",
        clg: "yoo"
    },
    {
        year: "firstsecond",
        clg: "yookrjf"
    },
    {
        year: "firstthird",
        clg: "yoofjsk"
    }

]

arrayObject.forEach((item) => {
    console.log(item.clg);
})

// forEach loop doesn't return anything
// if you do so it will return undefined