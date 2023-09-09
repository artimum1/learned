import React from "react";
import {Link} from "react-router-dom"
function Nav(){
return(
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Projects">Projects</Link>
    </div>

)
}
export default Nav