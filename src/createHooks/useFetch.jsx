import { useEffect, useState } from "react"

export default function (value,limit){
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products${value}?limit=${limit}`)
        .then(res=>res.json())
        .then((json)=>setData(json))
    },[value]);
    return data;
}