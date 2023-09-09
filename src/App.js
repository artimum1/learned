import React, { useEffect, useState } from "react";
import dataFetch from "./fuck.js";
import Nav from './Nav';
import Home from './Home';

function App(){

const [DATA,SetDATA] = useState(null)
const [loading,setLoading] = useState(true)

useEffect(() => {
    dataFetch("https://server.artimum.repl.co/")
      .then((data) => {
        setLoading(false)
        SetDATA(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return(
    <div>
        <Nav />
        {loading && <div>loading...</div>}
        {DATA && <Home content={DATA} />}
    </div>
)

}

export default App