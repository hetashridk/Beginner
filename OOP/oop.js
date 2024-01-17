// object literals
const user = {
    username: "Hetashri",
    loginCount: 2,
    signedIn: true,

    getUserDetails: function () {
        console.log("Got users all details");
        console.log(`Username: ${this.username}`);
        console.log(this);   //will print all thing
    }
}
console.log(this);   //will print {}, as there is nothing in global context in node env but in window (browser env) you will get many things
console.log(user.loginCount);
console.log(user.getUserDetails());




// constructor function :- will give new instance every that is using new keyword
function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Good morning ${this.username}!!`);
    }

    return this    //if we will not return this then it will implicitly defined it and written it
}

// const userOne = User("hetashri", 1, true)
// const userTwo = User("hetu", 2, false)      //will overide the value of userOne so to not override ww will write new keyboard, which will create new copy/ new instance

const userOne = new User("hetashri", 1, true)
const userTwo = new User("hetu", 2, false) 
console.log(userOne.constructor);  //will print function which is user = constructor is refernce of itself
console.log(userTwo);

// NEW KEYWORD:-
// when we will use new keyword, to firstly empty object will created which we can call instance that new object will created
// constructor function will called due to new keyword 
//by this keyword argument is being injected
// and now we will get it inside the function