import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Filter() {
  const [srchPrm, setSrchPrm] = useSearchParams();
  console.log(srchPrm.get("age"));
  console.log(srchPrm.get("city"));
  const age = srchPrm.get("age");
  const city = srchPrm.get("city");
  return (
    <div>
      <h1>Filter Page</h1>
      <h1>Age is: {age}</h1>
      <h1>City is: {city}</h1>
      <button onClick={()=>{setSrchPrm({age:'50'})}} >Change age to 50</button>
      <button onClick={()=>{setSrchPrm({city:'sydney'})}} >Change city to sydney</button>
      <button onClick={()=>{setSrchPrm({city:'sydney',age:'80'})}} >Change Both</button>
      <input placeholder="Set text manually" onChange={(e)=>{setSrchPrm({text:e.target.value})}} />
    </div>
  );
}
