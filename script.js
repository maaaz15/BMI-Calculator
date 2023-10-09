const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = 'Please enter valid height'
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Please enter valid weight'
    }
    else{
       const bmi = (weight / ((height * height) / 10000)).toFixed(2)
       result.innerHTML = `Body Mass Index is <span>${bmi}</span>`

       // additional result
       const result2 = document.querySelector('#result2')
        if (bmi < 18.6) {
        result2.innerHTML = `You are under weight`
        }
        else if (bmi > 18.6 && bmi < 24.9) {
        result2.innerHTML = `You are in normal range`
        }
        if (bmi > 24.9) {
        result2.innerHTML = `You are over weight`
        }

    }
})