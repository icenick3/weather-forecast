import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

import axiosLocation from "../../../services/locationService/locationService";
import './LocationForm.scss'

const LocationForm = ({ setCities, setActive, setSoundState, setError}) => {

    const {handleSubmit, register, reset,} = useForm()
    const [location, setLocation] = useState()

    useEffect(() => {
        if (location){
            axiosLocation(location)
                .then(res => {if (res.data.length !== 0){
                    setCities(res.data)
                    setError(null)
                }else {
                    setError('error')
                }})
        }else {
            setError('error')
        }

    }, [location])

    const onSubmit = ({location}) => {
        setActive(false)
        setSoundState(false)
        setLocation(location)
        reset()
    }

    return (
        <div className={'locationForm'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="text-field">
                    <div className="text-field__icon">
                        <input className="text-field__input" type="search" id="search" {...register('location')} placeholder={'Select city'}/>
                        <span className="text-field__aicon" >
                            <button className={'btn'} ></button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LocationForm;
