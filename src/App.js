import React, { Component } from "react";
import Mastermind from "./components/Mastermind";
import "./App.css";

class App extends Component {
   state = { key: 0 };

   resetHandler = () => {
      console.log("i was triggered");
      this.setState(st => {
         let newkey = st.key;
         newkey++;
         return { key: newkey };
      });
   };

   render() {
      return (
         <Mastermind key={this.state.key} resetHandler={this.resetHandler} />
      );
   }
}

export default App;
