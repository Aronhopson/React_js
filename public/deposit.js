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