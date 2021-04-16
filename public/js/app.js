console.log('Client side javascript file is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const title = document.querySelector('#title')
//const errorMsg = document.querySelector('#error')
const header = document.querySelector('#header')
const text = document.querySelector('#text')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    // forecast.textContent = 'Loading'
    //errorMsg.textContent = undefined
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                title.textContent = 'Error'
                return text.textContent = data.error
            }
            title.textContent = data.location
            text.textContent = 'The weather is ' + data.weatherDescription + ', the temperature is ' + data.temperature + ' degrees fahrenheit but it feels like ' + data.feelslike + ' degrees fahrenheit'

        })
    })
})