import React, { useEffect, useState } from "react";
import axios from "axios";
import {T} from '../App'

//Frances Hansen
export default function Searching() {
  const [strains, setStrain] = useState([

    {
      id: 1,
      name: "asdasd",
      img: `https://francesjuniper.com/assets/indica.png`,



    },
    {
      id: 2,
      name: "",
      img: 'https://francesjuniper.com/assets/indica.png',



    }
  ]);

  const [ID, setID] = useState([

  ])

 

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

        // .then(response => {
        //   const idata = Object.values(response.idata);
        //   const resulting = data.filter(id =>
          
        //     id.id.toLowerCase.includes(ID.toLowerCase())
  
        //   );
        //   setID(resulting)
        // })

  }, [query]);
  // axios
  // .get(`strainapi.evanbusse.com/W9EAUtJ/strains/data/desc/${id}`)
  // .then(res => {
  //   const datas = res.data
  //   console.log('E F F E C T S', res.datas)
  // })
  
  const handleInputChange = event => {
    
    setQuery(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  } 
  ///vvv the copypaster

  const indica = event => {
    change();
    document.forms["form"]["search"].value += `${query}`
  }



  function change(){
    let indicas = 'indica'
    let {query} = {indicas};
  
  }

  const changer = event => {
    document.forms["form"]["search"].value += `indica`
  }

  

  const sativa = event => {
    document.forms["form"]["search"].value += 'sativa'
  }

  const hybrid = event => {
    document.forms["form"]["search"].value += 'hybrid'
  }
  
  console.log("Q U E R Y",query)

return(
  <T.FormBox>
      <form name="form" className="search">
        <T.Inputx
          type="text"
          onChange={e => setQuery(e.target.value)}
          value={query}
          name="search"
          placeholder="Strain Search"
          autoComplete="off"
          tabIndex="0"
        />
        <button type='submit' onSubmit={submitHandler}>Search</button>
      
      </form>  
      <T.FilterBox>
        
        <T.A href="#"type='' onClick={e => setQuery('indica')}><ins style={{color:'#8500A7'}}>#</ins>indica<img style={{width:'36px', height:'39px'}} src='https://francesjuniper.com/assets/indica.png'></img></T.A>

        <T.A href="#"type='' onClick={e => setQuery('hybrid')}><ins style={{color:'#03cc24'}}>#</ins>hybrid<img style={{width:'36px', height:'39px'}} src='https://francesjuniper.com/assets/hybrid.png'></img></T.A>

        <T.A href="#"type='' onClick={e => setQuery('sativa')}><ins style={{color:'#CBDE2D'}}>#</ins>sativa<img style={{width:'36px', height:'39px'}} src='https://francesjuniper.com/assets/sativa.png'></img></T.A>

        
        </T.FilterBox>
      <T.WeedBoxContainer>
        {strains.map(pot => (

          <T.WeedBox>
          <p key={pot.id}>  {pot.name} </p>
          <img style={{width:'2.5rem', height:'2.5rem'}} src={query == false ? 'https://francesjuniper.com/assets/indica.png' : `https://francesjuniper.com/assets/${query}.png`}/>
          </T.WeedBox>
        ))}
 
      </T.WeedBoxContainer>
  </T.FormBox>
)
}
// Frances Hansen
