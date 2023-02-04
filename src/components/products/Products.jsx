import React, { useEffect, useState } from 'react'
import useFetch from '../../createHooks/useFetch'
import Product from './product/Product'
import "./Products.css"
import ClipLoader from "react-spinners/ClipLoader";

function Products({quantity, setQuantity, value, setBag, bag, local, setLocal}) {
  const [product, setProduct] = useState([])
  const newFetch = useFetch(product)

  function handleBuy(prod){
    let isPresent = false;
    bag.forEach((id)=>{
        if(prod.id === id.id)
          isPresent = true
    })
    if(!isPresent){
        setBag((prev) => {
            setQuantity(quantity+=1)
            return [...prev, prod]
        })
        local = localStorage.setItem(prod.id, [prod.image, prod.title, prod.description, prod.price]);
        setLocal(local);
    }
  }

  const [ loading, setLoading ] = useState(false)

  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
      setLoading(false)
      },3000)
  }, [newFetch])

  return (
    <div id="products">
      <div className='newProduct'>
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
          newFetch.map((prod, index) => {
            if(value === ""){
              return(
                <Product image={prod.image} title={prod.title} description={prod.description} price={prod.price} id={index} handleBuy={handleBuy} prod={prod}/>
              )
            }
            else if(prod.category.search(value) === 0){
              return(
                <Product image={prod.image} title={prod.title} description={prod.description} price={prod.price} id={index} handleBuy={handleBuy} prod={prod}/>
              )  
            }
          })         
        }
      </div>
    </div>
  )
}

export default Products