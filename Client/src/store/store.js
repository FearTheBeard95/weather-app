import { createStore, combineReducers, applyMiddleware } from "redux";
import weatherReducer from './reducers/WeatherReducer';
import thunk from 'redux-thunk'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const store = createStore(
        combineReducers ({
            weather: weatherReducer
        }),
        applyMiddleware(thunk)
    )
    return store;
};
