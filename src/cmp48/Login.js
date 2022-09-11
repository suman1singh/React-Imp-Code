import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate=useNavigate();
    const login=()=>{
        localStorage.setItem('login',true);
        navigate('/')
    }
    useEffect(()=>{
        const login=localStorage.getItem('login');
        if(login){
            navigate('/')
        }
    })
  return (
    <div>
        <h1>Login page</h1>
        <input type='text' />
        <input type='text' />
        <button onClick={login} >Login</button>
    </div>
  )
}
