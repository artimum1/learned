import React from "react";

function HomeContent(props){
    let content = props.content
    return(
        <div>
            {content.map((color)=>(

                <div key={color._id}>color is {color.color} , value is {color.value} </div>
            )
            )}
        </div>
    )

}
export default HomeContent