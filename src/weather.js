const geocode = require('../utils/geocode')
const forecast = require('../utils/forecast')

// Get weather function
 const getWeather = (location) => {
    geocode.geocode(location, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return console.log('Error: ', error)
        }
        forecast.forecast(latitude,longitude, (error, {temperature, feelslike, weatherDescription}) => {
            if (error) {
                return console.log('Error: ', error)
            }
            console.log(location)
            console.log('The weather is',weatherDescription,',its currently', temperature, 'degrees f, but it feels like',feelslike, 'degrees f.')
        })
    })
 }

//  Read weather function
const readWeather = (location) => {

}
 module.exports = {
    getWeather: getWeather,
    readWeather: readWeather
 }