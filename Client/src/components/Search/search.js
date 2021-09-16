import React from 'react'
import { LocationButton, SearchElement, SearchIcon, SearchInput } from "./styled";
import { startGetWeather } from "../../store/actions/weather";
import { connect } from 'react-redux';

// eslint-disable-next-line import/no-anonymous-default-export
const Search = (props) => {
    const onSubmit = (e) => {
        if(e.key === 'Enter'){
            console.log(e.target.value)
            props.dispatch(startGetWeather(e.target.value))
        }
    }
        return (
            <SearchElement>
                <SearchIcon />
                    <SearchInput onKeyDown={onSubmit}/>
                <LocationButton />
            </SearchElement>
        )
}

export default connect()(Search)