import React from "react";
import { Link } from 'react-router-dom'
import { BsFillBagFill } from 'react-icons/bs'
import "./Cart.css"
function Cart({quantity}) {
    return (
        <div className="bag">
            <span>
                <Link to="/Buy">
                    <i><BsFillBagFill /><sup>{quantity}</sup></i>
                </Link>
            </span>
        </div>
    )
  }
  
  export default Cart;