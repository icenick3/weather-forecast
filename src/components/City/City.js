import React from 'react';
import {Link} from "react-router-dom";

import './City.scss'

const City = ({city: {country, name, state, lat, lon}, setCoordinates}) => {

    const sendCoordinates = (lat, lon) => {
        setCoordinates({lat, lon})
    }

    return (
        <div className={'cityBlock'}>
            <div className={'city'}>
                <Link to={'/weather'} onClick={() => sendCoordinates(lat, lon)}>
                    <div className={'cityDescription'}>
                        <p><span>County: </span>{country}</p>
                        <p><span>City: </span>{name}</p>
                        <p><span>State:</span> {state}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default City;
