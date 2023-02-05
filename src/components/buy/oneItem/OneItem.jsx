import { useState } from "react"
import "./OneItem.css"


const OneItem = ({prod, handleRemove, index, quantity, setQuantity, bag, setBag}) => {
    const [ q, setQ ] = useState(1)
    const [ pric, setPric] = useState(prod.price)
    
    function handleDecrement() {
        if(q > 1){
            setQ(q => q - 1)
            setPric(pric-prod.price)
        }   
    }

    function handleIncrement(){
        setQ(q => q + 1)
        setPric(pric+prod.price)
    }

    function handleBuy(){
        alert("If you are sure that you are buying this product, click the OK button.      "+q+" - "+prod.title+" - "+"$"+prod.price)
        setQuantity(quantity-1)
        setBag(bag.filter((val, ind) => ind !== index))
    }

    return (
        <div className="productBuy">
            <div className='buyImage'>
                <img src={prod.image}/>
            </div>
            <div className='buyText'>
                <h1>{prod.title}</h1>
                <h2>{prod.description}</h2>
                <h3>${pric.toFixed(2)}</h3>
                <div className='removeIncDec'>
                    <div className='incDec'>
                        <button onClick={handleDecrement}>-</button>
                        <h4>{q}</h4>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <div className='buy-remove'>
                        <button onClick={() => handleBuy(index)}>Buy</button>
                        <button onClick={() => handleRemove(index)}>Remove</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OneItem