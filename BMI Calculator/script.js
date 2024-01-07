const form = document.querySelector("form")

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = parseInt(document.querySelector('#weight').value)
    const height = parseInt(document.querySelector('#height').value)
    const results = document.querySelector('#results')

    if(height === ' ' || height < 0 || isNaN(height)){
        results.innerHTML = `<span>Please enter proper value of height ${height}</span>`
    }
    else if (weight === ' ' || weight < 0 || isNaN(weight)){
        results.innerHTML = `<span>Please enter proper value of weight ${weight}</span>`
    }
    else{
        const bmi = (weight / ((height * height) / 10000 )).toFixed(2)

        // result printing
        if(bmi < 18.6){
            results.innerHTML = `<span>Your BMI is ${bmi} which is under weight</span>`
        }
        else if(bmi >= 18.6 && bmi < 24.9){
            results.innerHTML = `<span>Your BMI is ${bmi} which is Normalt</span>`
        }
        else{
            results.innerHTML = `<span>Your BMI is ${bmi} which is over weight</span>`
        }
    }
})