import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Buy.css"
import OneItem from './oneItem/OneItem'
import ClipLoader from "react-spinners/ClipLoader";

function Buy({bag, setBag, quantity, setQuantity, local, setLocal}) {
    function handleRemove(index){
        setQuantity(quantity-1)
        setBag(bag.filter((val, ind) => ind !== index))
    }

    const [ loading, setLoading ] = useState(false)

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
        setLoading(false)
        },3000)
    }, [])

    return (
        <div className='buyDiv'>
            {
            loading ?
    
            <ClipLoader
                className='loader'
                color="white"
                margin={100}
                size={50}
                speedMultiplier={1}
            />
            :
            bag.map((prod, index) => {
                return (
                    <OneItem prod={prod} handleRemove={handleRemove} index={index} bag={bag}/>
                )
            })}
        </div>
    )
}

export default Buy