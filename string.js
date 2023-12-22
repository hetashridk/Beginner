const name = "Hetashri"
const age = 20
console.log(name + age + " correct");

//String interpolation:- In this we make placeholders, je pan value hoi te aamne aama inject kari sakhiye
console.log(`My name is ${name}, my age is ${age}`);  //we can apply any method over here that is name.ToUppercase

//Another way to declare string
const surname = new String("Kansariwala");


//String is an object so key value pair
console.log(surname[2]);


//prototype:- that is method
console.log(surname.length);
console.log(surname.toUpperCase());   //doen't change original value
console.log(surname.charAt(7));
console.log(surname.indexOf('a'));
console.log(surname.substring(3, 7));   //we cannot give negative index
console.log(surname.slice(-11, 4));   //we can give negative index



const fatherName = "    DhavalKumar   "
console.log(fatherName.trim());    //trim function/method only terminates white spac and line termination (that is new line)
console.log(fatherName);

const username = "hetashri@dk@mail.com"
console.log(username.replace('@', '-'));
console.log(username.includes('dk'));
console.log(username.includes('wala'));
console.log(username.includes('-'));

// split on the basic of given char/thing and store it in array
console.log(username.split('@'));