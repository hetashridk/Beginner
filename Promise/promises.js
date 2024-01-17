
// Promise is an object so have done with new keyword
// Promise takes two parameter => resolve:- if the task happened
                            // => reject:- if the task is rejected


// creation of promise
const promiseOne = new Promise(function (resolve, reject) {

    // Do an Async task inside this promose block
  setTimeout(() => {
    console.log("Async  Task completed in 1000");
    resolve();
  }, 1000)  
})
// resolve is directly connected with .then ................so that's why we have written resolve() inside setTimeout

// promise consumption
promiseOne.then(() => {
    console.log("Promise Consume");
})   

                     //or

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async Task completed in 1000  (another method of writing)");
        resolve();
    }, 1000)  
}).then(() => {
    console.log("Promise Consume (another method of writing)");
})  


// passing of data and consumting it
const promiseThree = new Promise(function (resolve, reject) {
    
    setTimeout(() => {

        // generally we will passed object, but we can passed any data
        resolve(
            {
                name: "Hetashri",
                email: "hetashrikansariwala@gmail.com"
            }
        )
    },1000)
})
promiseThree.then((user) => {      //have pass user as there will be data coming
    console.log(user);
})


// error and multiple .then, reject usuage
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() =>{
        let error = true
        if(!error){
            console.log("Promise four in which we will be learning .then hell, catch, finallu and reject usuage");
            resolve(
                {
                    username: "hetashridk",
                    password: "Hlkajfio"
                }
            )
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.password      //this return vale will get printed or store in next .then
})
.then((username) => console.log(username))
.catch((e) => console.log(e))    //if there will be error then it will go into catch block
.finally(() => console.log("Promise is either resolve or rejected"))     //finallly block will performed either promise fulfilled or rejected

                                 //or


// handling using async, await
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() =>{
        let error = true
        if(!error){
            console.log("Promise four in which we will be learning .then hell, catch, finallu and reject usuage");
            resolve(
                {
                    username: "JS",
                    password: "Javascript"
                }
            )
        }
        else{
            reject('ERROR: Js went wrong')
        }
    },1000)
})
async function consumePromiseFive(){
    try{
        const response = await promiseFive    //as promiseFive is an object so we haven't written like this promiseFive()
        console.log(response); 
    }
    catch (e){
        console.log(e);
    }
}
consumePromiseFive()



async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/hetashridk')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()
                           //or

fetch('https://api.github.com/users/hetashridk')            //fetch will execute than all other functionality written above it
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
