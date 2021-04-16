const chalk = require('chalk')
const request = require('postman-request')

const forecast = (latitude,longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=e1decb9376ada0c012c8fd2780e11756&query='+longitude+','+latitude+'&units=f'

    request({url, json: true},(error,{body} = {}) => {
        if (error){
            callback('Error: unable to connect to weather service', undefined)
        } else if (body.error){
            callback('Error(' + body.error.code + '): ' + body.error.info,undefined)
        }else {
            callback(undefined, {
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                weatherDescription: body.current.weather_descriptions[0],
                humidity: body.current.humidity,
                windDirection: body.current.wind_dir,
                name: body.location.name,
                region: body.location.region,
                country: body.location.country
            })
        }
    })
}

module.exports = {
    forecast: forecast
}