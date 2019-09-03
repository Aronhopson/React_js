import React from 'react'

const BodyList = (props) =>{      //props is default from react ..... it is key features of reacts
       
    const items =props.naya.map((item) => {
          return(
              <div>
                  <h1>{item.title}</h1>
                  <div>{item.feed}</div>
              </div>
          )
    });
    return (
            <div>
                {items}
            </div>
        )
}

export default BodyList; 