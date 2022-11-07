import React, {useEffect, useReducer, useState} from 'react';
import axiosWeather from "../../services/weatherService/weatherService";
import './WeatherBoard.scss'
import arrow from '../../images/wind.png'

import WeatherCard from "../WeatherCard/WeatherCard";

const reducer = (state, action) => {

    state = action.reduce((r, a) => {
        r[a.dt_txt.substr(0, 10)] = r[a.dt_txt.substr(0, 10)] || [];
        r[a.dt_txt.substr(0, 10)].push(a);
        return r;
    }, {});
    return state;
}

const WeatherBoard = ({coordinates}) => {

    const [state, dispatch] = useReducer(reducer, [])
    const [weatherData, setWeatherData] = useState()
    const element = document.getElementsByClassName(`weatherCard0`)[0]

    useEffect(() => {
        const func = async () => {
            const a = await axiosWeather(coordinates)
            await dispatch(a.data.list)
        }
        func()
    }, [coordinates])

   useEffect(()=>{
       if (!!element){
           element.classList.add('active')
           setWeatherData(Object.entries(state)[0])
       }
   },[state])

    return (
        <div className={'weatherContainer'}>
            <div className={'weatherBoard'}>
                {Object.entries(state).map((elem, index) => <WeatherCard key={index} elem={elem}
                                                                         setWeatherData={setWeatherData}
                                                                         index={index}/>)}
            </div>
            <div className={'weatherList'}>
                <table className={'options'}>
                    <tr>&nbsp;</tr>
                    <tr>Temperature,°C</tr>
                    <tr>Feels like,°C</tr>
                    <tr>Pressure,hPa</tr>
                    <tr>Humidity,%</tr>
                    <tr>Wind,meter/sec</tr>
                    <tr>Probability precipitation,%</tr>
                </table>
                <div className={'tables'}>
                    {!!weatherData && weatherData[1].map(val => <table className={'day'}>
                        <th className={'date'}>{val.dt_txt.substr(10, 6)}</th>
                        <tr>{Math.ceil(val.main.temp)}°C</tr>
                        <tr>{Math.ceil(val.main.feels_like)}°C</tr>
                        <tr className={'pressure'}>{val.main.pressure}</tr>
                        <tr>{val.main.humidity}</tr>
                        <tr className={'wind'}>
                            <img className={'img'} src={arrow} alt=""
                                 style={{transform: `rotate(${val.wind.deg}deg)`}}/>
                            <p>{val.wind.speed.toFixed(1)}</p>
                        </tr>
                        <tr className={'big'}><p>{Math.round((val.pop) * 100)}</p></tr>
                    </table>)}
                </div>

            </div>
        </div>
    );
};

export default WeatherBoard;
