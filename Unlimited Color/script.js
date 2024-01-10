// generating random color

const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#'

    for(i = 0; i <= 5; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color
};

let setting
document.querySelector("#start").addEventListener('click', () => {
   setting =  setInterval(() => {
        document.body.style.backgroundColor = randomColor();
    }, 1000)
})

document.querySelector("#stop").addEventListener('click', () => {
    clearInterval(setting)
})