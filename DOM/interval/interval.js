// setInterval has 3 parameter
// handle:- call back function
//time
// string or kam or arguments

let intervalId
count = 0
const starting = (str) => {
    console.log(`${str} ${count++}`);
}

document.querySelector('#start').addEventListener('click', () =>  {
    intervalId = setInterval(starting, 1000, "Hetashri")
})

document.querySelector('#stop').addEventListener('click', () =>  {
    clearInterval(intervalId)
})