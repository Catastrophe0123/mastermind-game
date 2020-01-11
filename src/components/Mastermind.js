import React, { Component } from "react";
import Rules from "./Rules";
import ColourList from "./ColourList";
import Board from "./Board";

class Mastermind extends Component {
   state = { currentColour: "" };

   onChooseHandler = colour => {
      console.log("i was pressed");
      console.log(colour);
      this.setState({
         currentColour: colour
      });
   };

   render() {
      return (
         <div>
            <h1 style={{ textAlign: "center" }}>MASTERMIND</h1>
            <Rules />
            <ColourList chooseHandler={this.onChooseHandler} />
            <Board currentColour={this.state.currentColour} />
         </div>
      );
   }
}

export default Mastermind;
