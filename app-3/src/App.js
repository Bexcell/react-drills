import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

      this.state = {
        food: ['pizza', 'spaghetti', 'fettucini', 'garlic rolls']
        };  
      }
      handleChange(filter) {
        this.setState({filterString: filter });
      }

      render () {
      let foodsToDisplay = this.state.food
        .filter((element, index) => {
          console.log(index)
          return element.includes(this.state.filterString);
        })
        .map((element, index) => {
          return <h2 key={index}>{element}</h2>;
        });
        return(
          <div className="App">
          <input onChange={e => this.handleChange(e.target.value)} type="text" />
          {foodsToDisplay}
          </div>
        );
      }
    }

        
       

export default App;
