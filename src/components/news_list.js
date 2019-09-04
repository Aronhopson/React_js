import React from 'react'
import NewsItem from "./news_list_item";


const NewsList = (props) =>{      //props is default from react ..... it is key features of reacts
       
    const items = props.naya.map((item) => {   //map() is ES6 doing kind of forloop
          return(
              <NewsItem key={item.id} item={item}></NewsItem>  //Modular javaScript

          )
           
    });
    return (
            <div>
                {props.children}
                {items}
            </div>
        )
}

export default NewsList; 

