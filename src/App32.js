import React from 'react'
import './App32.css'
import style from './custom32.module.css'

export default function App32() {
  return (
    <div>
        <h1 className='primary'>CSS Style Type 1</h1>  
        {/* style sheet css */}
        <h1 style={{ color: 'red', backgroundColor: 'ButtonShadow' }}>CSS Style Type 2</h1>
        {/* Inline css */}
        <h1 className={style.success} >CSS Style Type 3</h1>
        {/* Modular css */}
    </div>
  )
}
