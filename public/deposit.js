// how it works  ====onChange = { (zz) => this.inputChangeHandler(zz)}>====== Event===
// function one(name) {
// console.log(name)
// }
// function two(name){
//     one(name)
// }
// two("aron")


//==============CLASS COMPONENT======================= EVENTS======
// import React, {Component} from 'react';
// import "../css/style.css"



// class Header extends Component {

//     inputChangeHandler (event) {
//         console.log(event.target.value)
//     }

//     render(){
//         return(
//             <header>
//                 <div className="logo">Logo</div>
//                 <input type="text" 
//                  onChange = { (zz) => this.inputChangeHandler(zz)}>

//                  </input>
//             </header>
//         ) 
//     }
// }


// export default Header;

//====================================



//================ //FUNCTIONAL COMPONENT=================

// import React from 'react';
// const Header = () =>{
//     return (
//        <header>
//            <div>Logo</div>
//            <input type=  "text "></input>
//        </header>

//     )
// }


//================BIND(THIS)========================
// import React, {Component} from 'react';
// import "../css/style.css"



// class Header extends Component {

//     state = {
//         keyswords:"hello"
//     }

//     inputChangeHandler (event) {
//         // console.log(event.target.value)
//         this.setState({
//             keyswords : event.target.value
//         })
//     }

//     render(){
//         console.log(this.state.keyswords)
//         return(
//             <header>
//                 <div className="logo">Logo</div>
//                 <input type="text" 
//                  onChange = {this.inputChangeHandler.bind(this)}> =================//BIND HERE

//                  </input>
//             </header>
//         ) 
//     }
// }


// export default Header;

//====================USING ARROW FUNCTION=====================

// class Header extends Component {

//     state = {
//         keyswords:"hello"
//     }

//     inputChangeHandler = (event) =>{    ================== //UISNG ARROW FUNTION HERE
//         // console.log(event.target.value)
//         this.setState({
//             keyswords : event.target.value
//         })
//     }

//     render(){
//         console.log(this.state.keyswords)
//         return(
//             <header>
//                 <div className="logo">Logo</div>
//                 <input type="text" 
//                  onChange = {this.inputChangeHandler}>

//                  </input>
//             </header>
//         ) 
//     }
// }
//========================style change color==============

 //const style = {
    //     background : "red"
    // }

    // if(this.state.keyswords !== " "){
    //     style.background = "green"
    // } else {
    //     style.background = "blue"
    // }
////=============================style css===================
//     import React from "react";
// import {css} from "glamor"

// const NewsItem = ({item}) =>{

//     let news_list = css ({
//         padding: "20px",
//         boxSizing: "border-box",
//         borderBottom: "2px solid blue",
//          ':hover' :{
//             color: "green"
//         },
//         "@media(max-width : 500px)" : {
//             color : "blue"
//         }
//     }) 

//     let news_item = css ({
//         background: "gray"
//     })

//     return(
//          //ES6 template string   =============   {template string is same as 3 doots}
//          <div className= {`${news_list} ${news_item}`}>  
//         {/* //here three dots id ES6 grabbing all element of newskist and putting it on (return) */}
//          {/* <div {...newslist} {...newsitem}>            */}
//             <h1>{item.title}</h1>
//             <div>{item.feed}</div> 
//         </div>  
//     )
// }

// export default NewsItem;


