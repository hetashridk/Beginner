// setTimeout function takes two parameter
// handler:- callback function
// time

const changeHeading = function () {
    document.querySelector('h1').innerHTML = "Welcome go best life after I get the job"
} 


// after 2sec the h1 will change to Welcome go best life after I get the job
setTimeout(changeHeading, 2000)

//                       OR

// setTimeout(function () {
//     document.querySelector('h1').innerHTML = "Welcome go best life after I get the job"
// }, 2000)


//now if we want to stop the event which ever is happening then we will user clearTimeout function


// we will be stopping this below timeOut using clearTimeout
const clear = setTimeout(() => {
    const heading = document.createElement('h2')
    heading.innerHTML = "Added 2nd heading"

    document.body.appendChild(heading)
}, 3000)
document.querySelector("#stop").addEventListener('click', () => {
    clearTimeout(clear)
    console.log("stopped");
})