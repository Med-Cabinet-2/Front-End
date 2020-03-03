import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Searching(props) {
  const [strains, setStrain] = useState([]);

  const [query, setQuery] = useState("");

  console.log("S T R A I N S",strains)
  

  useEffect(() => {
    axios
      .get(`https://cors-anywhere.med-cabinet2.herokuapp.com/api/users:id/strains`)
       
      .then(response => {
        const data = response.data;
        console.log("D A T A",response.data,);
        const result = data.filter(effect =>
          
          effect.effect.toLowerCase().includes(query.toLowerCase())
        );
        props.setStrain(result);
      });
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  console.log("Q U E R Y",query)

return(
  <div>
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="search"
          placeholder="Strain Search"
          autoComplete="off"
        />
      </form>
  </div>
)
}

