import React, { useEffect, useState } from 'react'
import Products from './components/products/Products';
import { Routes, Route, Navigate } from 'react-router-dom'
import Buy from './components/buy/Buy';
import Menu from './components/menu/Menu';

function Home() {
    const [bag, setBag] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [value, setValue] = useState("")
    const [ local, setLocal ] = useState()

    return (
        <div>
            <Menu quantity={quantity} value={value} setValue={setValue}/>
            
            <Routes>
                <Route path='/' element={<Products quantity={quantity} setQuantity={setQuantity} value={value} setValue={setValue} bag={bag} setBag={setBag} local={local} setLocal={setLocal}/>} />
                <Route path="/Buy" element={<Buy bag={bag} setBag={setBag} quantity={quantity} setQuantity={setQuantity} local={local} setLocal={setLocal} />}/>
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
            
            
        </div>
    )
}

export default Home