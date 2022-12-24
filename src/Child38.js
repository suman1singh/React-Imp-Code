import React from 'react'

export default function Child38(props) {
    const data="Suman singh";
  return (
    <div>
        <h1>User name:</h1>
        <button onClick={()=>props.alert(data)}>Click me</button>
    </div>
  )
}
