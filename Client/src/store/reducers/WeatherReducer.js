const weatherReducerDefaultState = {
    weatherData: {
        main: {
            feels_like: 0,
            humidity: 0,
            pressure: 0,
            temp: 0,
            temp_max: 0,
            temp_min: 0
        },
        name: '',
        sys: {
            country: '',
            sunrise: 0,
            sunset: 0,
        },
        weather: {
            id: 200,
            main: '',
            description: '',
            icons: '',
        },
        wind: {
            deg: 0,
            speed: 0
        }
    },
    exetendedWeatherData: [],
    isError: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = weatherReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_WEATHER':
            console.log(action.weather)
            return state = {
                ...state,
                ...action.weather
            }
        default:
            return state
    }
}