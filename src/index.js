 import React, { Component } from 'react';
 import ReactDOM from 'react-dom';

 import JSON from './db.json';


 //COMPONENTS
 import Header from './components/header'
 import Newslist from './components/news_list'

class App  extends Component {
    state= {
        news: JSON,
        filtered:[]
    }

    getKeyword = (event) => {
        // console.log(event.target.value)
        let keyword =event.target.value;
        let filtered = this.state.news.filter((item) =>{
            return item.title.indexOf(keyword) > -1
        });
        this.setState({
            filtered
        })
    }

    render() { 
        let x = this.state.filtered;
        let y = this.state.news;
        return ( 
            <div>
                   <Header  keywords = {this.getKeyword} />
                   <Newslist naya= {x.length === 0 ? y : x }>
                        The news are :
                   </Newslist>
            </div>
        ) 
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));