import React from 'react';
import WeatherBoard from "../../components/WeatherBoard/WeatherBoard";
import Loader from "../../components/Loader/Loader";
import './HomePage.scss'
import {Link} from "react-router-dom";

const HomePage = ({ coordinates}) => {
    return (
        <div>
            <WeatherBoard coordinates={coordinates}/>
            <Loader/>
            <div className={'click'}>
                <Link to={'/'}>
                    <h1>Choose <br/> another city</h1>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
