export const getWeather = (weather) => ({
    type: 'SET_WEATHER',
    weather
    
})

export const startGetWeather = (place = '') => {
    return async (dispatch) => {
        const response = await fetch(`https://carlos-weather-app.herokuapp.com/weather?address=?${place}`)
        const body = await response.json()

        const weather = {
            ...body.weatherData,
            name: body.location
        }
        dispatch(getWeather(weather))
    }
}

export const getPlaces = ({
    searchTerm
} = {}) => ({
    type: 'GET_PLACES',
    searchTerm

})