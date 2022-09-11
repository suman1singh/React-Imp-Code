import React from 'react'
import Login20 from './Login20'

export default function App20() {
    const [log,setLog]=React.useState(false);
  return (
    <div>
        <h1>Click Here Show log Page</h1>
        <button  onClick={()=>setLog(!log)}>LogIn Page</button>
        {
            log? <Login20 />:null
        }
    </div>
  )
}
