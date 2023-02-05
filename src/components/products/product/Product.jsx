import React from 'react'
import "./Product.css"
import { BsFillCartPlusFill } from 'react-icons/bs'
function Product({image,title,description,price,handleBuy,id,prod}) {
  return (
    <div className="product">
        <img src={image}/>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <h3 className='h3'>${price} <button onClick={() => handleBuy(prod)} key={id}><BsFillCartPlusFill/>Buy</button></h3>
    </div>
  )
}

export default Product;