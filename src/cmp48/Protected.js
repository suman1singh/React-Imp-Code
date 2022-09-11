import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protected(props) {
    const navigate=useNavigate();
    useEffect(()=>{
        const login=localStorage.getItem('login');
        if(!login){
            navigate('/login')
        }
    })
    const {Compo}=props;
  return (
    <div>
        <h1>Home throw Protected Route</h1>
        <Compo />
    </div>
  )
}
