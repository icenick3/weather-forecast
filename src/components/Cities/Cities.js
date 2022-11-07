import React from 'react';
import City from "../City/City";
import './Cities.scss'

const Cities = ({cities, setCoordinates}) => {

    return (
        <div className={'cities'}>
                {cities.map(city => <City key={city.lon} city={city} setCoordinates={setCoordinates}/>)}
        </div>
    );
};

export default Cities;
