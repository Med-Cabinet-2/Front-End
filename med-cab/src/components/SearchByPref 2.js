import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Preferences from './Preferences';

export default function SearchByPref() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://med-cabnit2.herokuapp.com/')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return(
        <div className='preferences-search'>
            <Preferences />
        </div>
    );
}