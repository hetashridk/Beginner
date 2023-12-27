// Immediately Invoked Function Expressions:- iife

// global scope na pollution thi bau vaar problem thy, to global scope ma jetla declaration che tene atava mate we have use iife
// iife:- ()()


// iife is used when we want that the function will execute immediately.
// that is eg:- when we open the application we need to connect the database immediately

// named iife
(function yoo() {
    console.log(`DB connected`);
    
})();  //semicolon is for termination of function

// in iife arrow function will also work

// unnamed iife
((name) => {
    console.log(`My name is ${name}`);
})('Hetashri')
