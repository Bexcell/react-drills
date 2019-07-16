import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super(); 
  
    this.state = {
      word: 'hello world'
    }

  }

  handleChange(dood){
    this.setState({ 
      word: dood
    })
  }

  render() {
    return (
      <div className="App">
      
        <input onChange={(blah) => this.handleChange( blah.target.value) } /> 
      
        { this.state.word }
       
      </div>
    );
  }
}

export default App;
