import React from "react";
import { Link } from 'react-router-dom'
import { BsFillCartCheckFill } from 'react-icons/bs'
import "./Cart.css"
function Cart({quantity}) {
    return (
        <div className="bag">
            <span>
                <Link to="/Buy">
                    <i><BsFillCartCheckFill /><sup>{quantity}</sup></i>
                </Link>
            </span>
        </div>
    )
  }
  
  export default Cart;