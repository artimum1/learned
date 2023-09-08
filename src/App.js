import React, { useEffect, useState } from "react";
import dataFetch from "./fuck.js";
import Nav from './Nav';
import Home from './Home';

function App(){

const [DATA,SetDATA] = useState(null)
useEffect(() => {
    dataFetch("https://server.artimum.repl.co/")
      .then((data) => {
        SetDATA(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

return(
    <div>
        <Nav />
        {DATA && <Home content={DATA} />}
    </div>
)
}

export default App