import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import dataFetch from "./fuck.js";
import Nav from './Nav.js';
import Home from './Home.js';
import About from "./About.js";
import Projects from "./Projects.js";


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
    <Router>
    <div>
        <Nav />
    <div className="MAIN">
        <Switch>
          <Route exact path="/">
        {loading && <div>loading...</div>}
        {DATA && <Home content={DATA} />}
        </Route>
        <Route exact path="/About">
            <About />
        </Route>
        <Route exact path="/Projects">
            <Projects />
        </Route>
        </Switch>
        </div>
    </div>
    </Router>
)

}

export default App