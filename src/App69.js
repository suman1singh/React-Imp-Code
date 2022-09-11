import React,{useState} from 'react'

export default function App69() {
    const [count,setCount]=useState(1);
    function update(){
        setCount((pre1)=>{
            console.log(pre1);
            return count +1;
        })
    }
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={update}>Update count</button>
    </div>
  )
}
