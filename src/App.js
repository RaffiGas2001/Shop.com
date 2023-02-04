import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import PuffLoader from "react-spinners/PuffLoader";

function App() {
  const [ loading, setLoading ] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  }, [])

  return (
  <div className="App">
    {
      loading ?

      <PuffLoader className='loader'
        color="white"
        margin={100}
        size={100}
        speedMultiplier={2}
      />
      :
      <Home />
    } 
    </div>
  );
}

export default App;
