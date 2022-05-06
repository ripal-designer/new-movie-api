import React from 'react'
import { useState } from 'react';

function Search(props) {
    const [searchTerm,setSearchTerm] = useState('')
    return (
      <div className="App">
        <input type="text" placeholder="seach..." onChange={e=>setSearchTerm(e.target.value)} />
        {props.jasonData.results.filter((val) => {
         if(searchTerm === ""){
            return val + "sss"
          } 
          else if(val.original_title.toLowerCase().includes(searchTerm.toLowerCase())){
            return val + "11";
            
          }
        }).map((val,key)=>{
          return <div>{val.original_title}{console.log("test")} </div>
        })}
      </div>
    );
  }

export default Search