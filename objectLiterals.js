//singleton object:- Koi pan constructer thi aapne jyare create karisu to singleton object banse
// means aa potani type nu ek aj object che
//if singleton thi nai banaviye to aena multiple instances pan bani sakhe

// When we declare object using litearls tya singleton object nai bane
// When we declare object using constructor tya singleton object bane

//Object Literals

// declaration of symbol
const mySymbol = Symbol("key");

// declaration of object
const JsUser = {
    name: "Hetashri",     //js will take key as "name"
    age: 20,
    "surname": "Kansariwala",   //we can also declare key as in " "
    
    // symbol in object syantax
    [mySymbol]: "yoooo",
    city: "Surat",
    email: "hetashrikansariwala@gmail.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Wednesday", "Friday"]
}

//We can acess key value in object in 2 ways

// 1st way
console.log(JsUser.name);

// 2nd way
console.log(JsUser["age"]);

console.log(JsUser[mySymbol]);


// changing the value
JsUser.email = "hetashrik@gmail.com"

// if we want that nobody can change object as we have done (change in email) then we have to freeze it
// Object.freeze(JsUser);

// JsUser.email = "hetashridk@gmail.com"  //this change will not propogate as we have freeze it

console.log(JsUser);

// function declaration on object
JsUser.helloji = function(){
    console.log("AAj to sunday hao to maje hai");
}

console.log(JsUser.helloji);   //only give reference of that function
console.log(JsUser.helloji());

JsUser.hellojiyoo = function(){
    console.log(`AAj to sunday hao to maje hai ${this.surname}`);    //as we have to refernce same object so we have applu same object. As soon as we write this. we will show the key/property of that object
}

console.log(JsUser.hellojiyoo());


const user = {}

user.id = "466abc"
user.usernmae = "hetu"

console.log(user);


// object ni ander object:- nested object

const allUser = {
    id: "123abc",
    fullname: {
        firstname: {
            name: "Hetashri",
            nickname: "Hetu",
        }
    },
    age: 21
}

console.log(allUser.fullname.firstname.nickname);


// join object

// give obj inside obj
const obj1 = {user, allUser}
console.log(obj1);  

const obj2 = Object.assign({}, user, allUser);
console.log(obj2); 

const obj3 = {...user, ...allUser}
console.log(obj3);


// object inside array
const emailUser = [
    {
        id: "123",
        name: "Hetashri"
    },
    {
        id: "456",
        name: "Kansariwala"
    },
    {
        id: "789",
        name: "Dhaval"
    },
]
console.log(emailUser);
console.log(emailUser[1].name);


// This all thing will store in an array form
// to access all key
console.log(Object.keys(user));

// to access all values
console.log(Object.values(user));

// to see all the entries
console.log(Object.entries(user));

// to check if key/property exist or not
console.log(user.hasOwnProperty('id'));