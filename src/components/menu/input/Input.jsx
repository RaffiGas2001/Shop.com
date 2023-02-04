import React, { useState } from 'react'
import { Routes ,BrowserRouter, Route } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi'
import "./Input.css"

const Input = ({setValue}) => {
    const [values, setValues] = useState() 
    function handleSearch(){
        setValue(values)
    }
    function handleAll(){
        setValue("")
        setValues("")
    }
    return (
        <div className='input'>
            <input type="text" onChange={(event)=>{setValues(event.target.value)}} value={values} placeholder='Search Product ?'/>
            <button onClick={handleSearch} className='search'><BiSearchAlt /></button>
            <button onClick={handleAll} className='all'>All</button>
        </div>
    )
}

export default Input