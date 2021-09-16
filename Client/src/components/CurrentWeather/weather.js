import React from 'react';
import { ReactComponent as HighIcon } from '../../assets/high-icon.svg';
import { ReactComponent as HumidityIcon } from '../../assets/humidity-icon.svg';
import { ReactComponent as LowIcon } from '../../assets/low-icon.svg';
import { ReactComponent as PressureIcon } from '../../assets/pressure-icon.svg';
import { ReactComponent as WindIcon } from '../../assets/wind-icon.svg';
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import {
    CurrentWeather,
    CurrentWeatherContainer,
    CurrentWeatherInfo,
    FeelsLike,
    HighLowContainer,
    InfoRow,
    SectionTitle,
    WeatherContainer,
    WeatherDegree
} from './styled';
import { connect } from 'react-redux';

const TodaysWeather = (props) => {
  const data = props.weather
  console.log(props)
  return (
    <WeatherContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SectionTitle>Current Weather</SectionTitle>
      </div>
      <CurrentWeatherContainer>
        <CurrentWeather>
          <h4>{data.name}</h4>
          <div style={{ display: 'flex' }}>
            <WeatherIcon code={data.id} />
            <span>
              {data.main.temp}
              <sup>&deg;</sup>
            </span>
          </div>
          <h6>{data.main.description}</h6>
        </CurrentWeather>

        <CurrentWeatherInfo>
          <FeelsLike>
            Feels like {data.main.feels_like}
            <sup>&deg;</sup>
          </FeelsLike>
          <HighLowContainer>
            <WeatherDegree>
              <HighIcon />
              {data.main.temp_max}
              <sup>&deg;</sup>
            </WeatherDegree>
            <WeatherDegree>
              <LowIcon />
              {data.main.temp_min}
              <sup>&deg;</sup>
            </WeatherDegree>
          </HighLowContainer>
          <InfoRow>
            <div style={{color: '#4a6fa1'}}>
              <HumidityIcon /> Humidity
            </div>
            <span>{data.main.humidity}%</span>
          </InfoRow>
          <InfoRow>
            <div style={{color: '#4a6fa1'}}>
              <WindIcon /> Wind
            </div>
            <span>
              {data.wind.speed}kph
            </span>
          </InfoRow>
          <InfoRow>
            <div style={{color: '#4a6fa1'}}>
              <PressureIcon /> Pressure
            </div>
            <span>{data.wind.deg}hPa</span>
          </InfoRow>
        </CurrentWeatherInfo>
      </CurrentWeatherContainer>
    </WeatherContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(TodaysWeather)