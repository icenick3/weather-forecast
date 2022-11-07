import React, {useState} from 'react';
import LocationForm from "../../components/Forms/LocationForm/LocationForm";
import Cities from "../../components/Cities/Cities";
import './LocationPage.scss'
import RunString from "../../components/RunString/RunString";

const LocationPage = ({setCoordinates}) => {

    const [cities, setCities] = useState([])
    const [active, setActive] = useState(true)
    const [soundState, setSoundState] = useState(true)
    const [error, setError] = useState()


    return (
        <div className={'locationPage'}>
            <RunString active={active} soundState={soundState} error={error}/>
            <LocationForm setCities={setCities} setActive={setActive} setSoundState={setSoundState} setError={setError}/>
            <Cities cities={cities} setCoordinates={setCoordinates} />
        </div>
    );
};

export default LocationPage;
