import React from "react";
import classes from "../css/style.css"

const NewsItem = ({item}) =>{

    

    return(
    
         <div className= {classes.News_Item}>  
             <h1>{item.title}</h1>
            <div>{item.feed}</div> 
        </div>  
    )
}

export default NewsItem;


