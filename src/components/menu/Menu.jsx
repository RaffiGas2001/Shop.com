import React, { useState } from 'react'
import { Routes ,BrowserRouter, Route } from 'react-router-dom'
import Images from "./images/Images"
import Input from "./input/Input"
import Cart from "./cart/Cart"
import "./Menu.css"
function Menu({quantity, value, setValue}) {
  return (
    <div id="img-inp-btn">
        <Images />
        <Routes>
          <Route path='/' element={<Input value={value} setValue={setValue}/>}/>
        </Routes>
        <Cart quantity={quantity}/>
    </div>
  )
}

export default Menu