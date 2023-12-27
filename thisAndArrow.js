// in Js, global object is "Window" object
const user = {
    username: "Hetashri",
    surname: "Kan",
    welcomeMsg: function() {
        console.log(`${this.username} welcome`);    //this.username will refer the current context/value/var
        // console.log(this);    
        // the above line that is console.log(this) will print the following thing
        // {
        //     username: 'Hetashri',
        //     surname: 'Kan',
        //     welcomeMsg: [Function: welcomeMsg]
        // }
    }
}

user.welcomeMsg();
user.username = "Dhaval"
user.welcomeMsg();
console.log(this);   //here output/cureent context will get empty object => as global don't have any context so empty

function yoo() {
    let username = "Hetashri"
    console.log(this);   //when this line will exceute it will give many things
    console.log(this.username);   //when this line will exceute it will give undefined. so this. wala thing will work for object not in varaiable
}
yoo();


//arrow function:- () => {}
const yeah = () => {
    let username = "Hetashri"
    console.log(this);     //will give empty object
    console.log(this.username);   //will give undefined
}

yeah();

//explicit return
const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(4, 7));

//implicit return
const addyoo = (num1, num2) =>  (num1 + num2);
console.log(addyoo(4, 7));

//implicit return
const addyooname = () =>  ({username: "Hetashri"});
console.log(addyooname());