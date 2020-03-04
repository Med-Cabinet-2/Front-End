import React, { useEffect, useState } from "react";
import axios from "axios";
import {T} from '../App'
//Frances Hansen
export default function Searching() {
  const [strains, setStrain] = useState([]);

 

  const [query, setQuery] = useState("");

  console.log("S T R A I N S",strains)
  

  useEffect(() => {
    axios
      .get(`http://strainapi.evanbusse.com/W9EAUtJ/strains/search/race/${query}`)
       
      .then(response => {
        const data = Object.values(response.data);
        console.log("D A T A",query);
        
        console.log("I N F O ", data)
        const result = data.filter(name =>
          
          name.name.toLowerCase().includes(query.toLowerCase())
        );
        setStrain(result);
        console.log("R E S U L T ", result)
      });
  }, [query]);
  const handleInputChange = event => {
    
    setQuery(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  } 

  const indica = event => {
    document.forms["form"]["search"].value += 'indica'
  }

  const sativa = event => {
    document.forms["form"]["search"].value += 'sativa'
  }

  const hybrid = event => {
    document.forms["form"]["search"].value += 'hybrid'
  }
  
  console.log("Q U E R Y",query)

return(
  <div>
      <form name="form" className="search">
        <input
          type="text"
          onChange={e => setQuery(e.target.value)}
          value={query}
          name="search"
          placeholder="Strain Search"
          autoComplete="off"
          tabIndex="0"
        />
        <button type='submit' onSubmit={submitHandler}>Search</button>

        <a href="#"type='' onClick={submitHandler,indica}>#indica</a>
        <a href="#"type='' onClick={submitHandler,sativa}>#sativa</a>
        <a href="#"type='' onClick={submitHandler,hybrid}>#hybrid</a>
      </form>
      <T.WeedBox>
        {strains.map(pot => (

          <T.WeedBox>
          <p key={pot.id}>  {pot.name} </p>
          </T.WeedBox>
        ))}
      </T.WeedBox>
  </div>
)
}
// Frances Hansen
