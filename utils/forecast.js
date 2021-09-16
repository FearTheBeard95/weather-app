const chalk = require('chalk')
const request = require('postman-request')

const forecast = (latitude,longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=e1decb9376ada0c012c8fd2780e11756&query='+longitude+','+latitude+'&units=f'

    request({url, json: true},(error,{body} = {}) => {
        if (error){
            callback({
                weatherData: {
                    isError: true
                }
            }, undefined)
        } else if (body.error){
            callback('Error(' + body.error.code + '): ' + body.error.info,undefined)
        }else {
            callback(undefined, {
                weatherData: {
                    main: {
                        feels_like: body.current.feelslike,
                        humidity: body.current.humidity,
                        pressure: body.current.pressure,
                        temp: body.current.temperature,
                        temp_max: body.current.temperature+1,
                        temp_min: body.current.temperature-1
                    },
                    name: '',
                    sys: {
                        country: body.location.country,
                        region: body.location.region,
                        latitude: body.location.latitude,
                        longitude: body.location.longitude,
                        localtime: body.location.localtime,
                        sunrise: 0,
                        sunset: 0,
                    },
                    weather: {
                        id: body.current.weather_code,
                    main: '',
                        description: body.current.weather_descriptions,
                        icons: body.current.weather_icon,
                    },
                    wind: {
                        deg: body.current.wind_degree,
                        speed: body.current.wind_speed,
                        direction:body.current.wind_dir 
                    }
                },
            })
        }
    })
}

module.exports = {
    forecast: forecast
}