function nums(num){
    return num;
}

console.log(nums(5));


//if we want to print many value as shown below, then we will use rest operator
console.log(nums(5, 7, 8, 111));


//rest operator
function rest(...num) {
    return num;
}
console.log(rest(11, 2, 5054));


// will only print the return value
function restanother(val1, val2, ...num) {
    return val1;
}
console.log(restanother(11, 2, 5054));


//object in function
function object1(object) {
    console.log(`Username is ${object.name} and department is ${object.department}`);
}

const user = {
    name: "Hetashri",
    department: "CSE"
}
object1(user);

// we can also pass object description as argument
object1({
    name: "Dhaval",
    department: "Finance"
})

// we can pass array as same as object

