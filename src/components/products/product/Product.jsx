import React from 'react'
import "./Product.css"
function Product({image,title,description,price,handleBuy,id,prod}) {
  return (
    <div className="product">
        <img src={image}/>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <h3>${price} <button onClick={() => handleBuy(prod)} key={id}>BUY</button></h3>
    </div>
  )
}

export default Product;