// In Js everything is a object only
// parent of object is nothing, so we will be get refernce as null => object doesn't have any parent
// whichever property is available to object is also available to array and string as everything is object in javascript - the property is usuable or not is a different thing 

function add(num) {
    return num + 10
}


// dot is used for accessing for object so function is also object (as at the end of the daya everything in javascript meet to object) and it is also a function
add.power = 2

console.log(add(2));    //o/p:- 12
console.log(add.power);     //o/p:- 2 
console.log(add.prototype);    //o/p:- {}  -> whta is {} => by default ek context set thy, je by default te method nu this che

function createUser(username, marks) {
    this.username = username
    this.marks = marks
}

createUser.prototype.print = function () {     //not complusory to write createUser.prototype.print instead w ecan aslo write createUser.prototype
    console.log(`Marks is ${this.marks}`);   //this refered to jena marks che tene print karai devo
}


// this will not print as we haven't add new keyword
// const user1 = createUser("hetashri", 8)
// user1.print(); 


const user1 = new createUser("hetashri", 8)  
user1.print();    //user1 nu che to te user1 nu aj marks print karavse (usuage of this)


// Here's what happens behind the scenes when the new keyword is used:

// A new object is created: The new keyword initiates the creation of a new JavaScript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
