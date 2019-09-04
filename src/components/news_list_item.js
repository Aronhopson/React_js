import React from "react";
import styless from "../css/style.css"

const NewsItem = ({item}) =>{

    

    return(
    
         <div className= {styless.lolo}>  
             <h1>{item.title}</h1>
            <div>{item.feed}</div> 
        </div>  
    )
}

export default NewsItem;


