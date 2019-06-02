import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://i.kinja-img.com/gawker-media/image/upload/s--xek1xnzt--/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/qdxlhw0i34ncaocjilli.png"} />
      </div>
    );
  }
}

export default App;