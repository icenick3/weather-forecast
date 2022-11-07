import React, {useEffect, useState} from 'react';
import './RunString.scss'
import {firstTimer, secondTimer} from "../Timers/timers";
import axiosRandomJokes from "../../services/randomJokesServices/randomJokesServices";


const RunString = ({active, error}) => {

    const [state, setState] = useState(true)
    const [stateRandom, setStateRandom] = useState(0)
    const [joke, setJoke] = useState(true)


    useEffect(() => {
        const timer = async () => {
            setState(await firstTimer(30000))
            setState(await secondTimer(30000))
            setStateRandom(new Date().getTime())
        }
        timer()
    }, [stateRandom])


    useEffect(()=>{
        axiosRandomJokes()
            .then(res => setJoke(res.data))
    },[state])

    return (
        <div className={'main'}>
            <div className={active ? 'text-container active' : 'text-container'}>
                {state === true && <p>Enter the name of the city.</p>}
                {state === 'first' && <p className={'joke'}>{joke}</p>}
                {state === 'second' && <p className={'joke'}>{joke}</p>}
            </div>
            <div className={'error'}>
                {error && !active && <p>Check the correctness of the city name</p>}
            </div>
        </div>


    );
};

export default RunString;
