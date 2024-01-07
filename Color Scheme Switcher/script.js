const butttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

butttons.forEach( (button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.id) {     //e.target will give :- which element we have click and .id will give that element id
            case 'grey':
                body.style.background = 'grey'
                break;
            case 'white':
                body.style.background = 'white'
                break;
            case 'yellow':
                body.style.background = 'yellow'
                break;
            case 'blue':
                body.style.background = 'blue'
                break;
        
            default:
                break;
        }
    })
})