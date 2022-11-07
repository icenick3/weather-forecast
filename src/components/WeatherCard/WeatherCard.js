import React from 'react';
import './WeatherCard.scss'


const WeatherCard = ({elem, setWeatherData, index}) => {

    const date = new Date(elem[0])
    const elements = document.getElementsByClassName('active')
    const element = document.getElementsByClassName(`weatherCard${index}`)

    const click = () => {
        setWeatherData(elem)
        if (elements[0]) {
            elements[0].classList.remove('active')
        }
        element[0].classList.add('active')
    }
    return (
        <div className={`weatherCard${index}`} onClick={click}>
            <div className={'dayDescription'}>
                <p>{date.toString().substr(0, 3)}</p>
                <h1>{date.toString().substr(8, 2)}</h1>
                <p>{date.toString().substr(4, 3)}</p>
            </div>
        </div>
    );
};

export default WeatherCard;
