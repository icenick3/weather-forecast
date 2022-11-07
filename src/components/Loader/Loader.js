import React, {useEffect, useState} from 'react';
import './Loader.scss'

const Loader = () => {

    const [active, setActive] = useState(true)

    useEffect(() => {
        setTimeout(()=> setActive(false), 1000)
    }, [])

    return (
        <div className={active ? 'loaderStorage display' : 'loaderStorage'}>
            <div className={'container'}>
                <div className='loader'>
                    <div className='spinner yellow'></div>
                    <div className='spinner orange'></div>
                    <div className='spinner red'></div>
                    <div className='spinner pink'></div>
                    <div className='spinner violet'></div>
                    <div className='spinner mauve'></div>
                    <div className='spinner light-yellow'></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
