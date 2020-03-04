import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

import PrefCard from './PrefCard';

//Jana Scheuble



export default function SearchByPref() {
    const [data, setData] = useState([]);

    const [query, setQuery] = useState('');

    useEffect(() => {
        axios.get('https://med-cabinet2.herokuapp.com/api/strains')
        .then(res => {
            console.log(res.data)
            setData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        const strains = data.filter(strain => {
           return strain.strain_description.toLowerCase().includes(query.toLowerCase()) ||
            strain.strain_type.toLowerCase().includes(query.toLowerCase()) ||
            strain.strain_name.toLowerCase().includes(query.toLowerCase()) 
        })
        setData(strains)
    }, [query])

    const handleChange = e => {
        e.preventDefault();
        setQuery(e.target.value)
    }

    return(
        <div className='preferences-search'>
            <form>
                <input id='keyword' type='text' name='keyword' placeholder='search by keyword' onChange={handleChange} value={query} />
                <button className='reset'>Reset</button>
            </form>
            <div className='card-container-pref'>
            {data.map((e, i) => {
                return <PrefCard key={i} name={e.strain_name} type={e.strain_type} description={e.strain_description}/>
            })}
            </div>
            
        </div>
    );
}