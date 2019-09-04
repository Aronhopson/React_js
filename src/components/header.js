//==============CLASS COMPONENT=======================
import React, {Component} from 'react';
import "../css/style.css"



class Header extends Component {

    state = {
        keyswords: " "
    }

    inputChangeHandler = (event) =>{
        // console.log(event.target.value)
        this.setState({
            keyswords : event.target.value
        });
    }

    render(){
        return(
            <header>
                <div className="logo">Logo</div>
                <input type="text" 
                 onChange = {this.inputChangeHandler}>

                 </input>
            </header>
        ) 
    }
}


export default Header;