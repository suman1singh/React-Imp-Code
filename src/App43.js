import React,{useRef} from 'react'

export default function App43() {
    const InputRef=useRef();
    function handleInput(){
        console.log("function call");
        InputRef.current.value="1000";
        // InputRef.current.style.backgroundColor="red";
        InputRef.current.style.marginTop="20px";
        InputRef.current.style.borderColor="red";
    }
  return (
    <div>
      <h1>useRef hooks example</h1>
      <input type="text" ref={InputRef}/>
      <button onClick={()=>handleInput()} >Change Ref</button>
    </div>
  )
}
