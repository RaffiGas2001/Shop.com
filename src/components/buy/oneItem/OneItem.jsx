import { useState } from "react"
import "./OneItem.css"


const OneItem = ({prod, handleRemove, index}) => {
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
                    <div className='remove'>
                        <button onClick={() => handleRemove(index)}>Remove</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OneItem