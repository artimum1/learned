import React from "react";
import HomeContent from './HomeContent'

function Home(props){
    let content = props.content
 
        return(
            <div className="content">
                
            <HomeContent content={content} />
            </div>
        )
    

}

export default Home