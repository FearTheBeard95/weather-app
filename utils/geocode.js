const request = require('postman-request')
const chalk = require('chalk')
const geocode = (address, callback) => {
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZmVhcnRoZWJlYXJkOTUiLCJhIjoiY2tuZnY0b2U4MjUxZjJ3bXVzd29jejljaiJ9.NCnMHIfjxaicyksUBQ5deg&limit=1'

    request({url: geocodeURL, json: true}, (error, {body}) => {
        if (error){
            callback('Error:' + ' Unable to connect to geocode service', undefined)
        } else if (body.features && body.features.length === 0){
            callback('Place not found!, try another search', undefined)
        } else{
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = {
    geocode: geocode
}