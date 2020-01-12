import React, { Component } from "react";
import Rules from "./Rules";
import ColourList from "./ColourList";
import Board from "./Board";

class Mastermind extends Component {
   state = { currentColour: "", answer: [] };
   //answer = ["red", black, etc]
   colours = ["red", "yellow", "blue", "brown", "green", "purple"];
   componentDidMount = () => {
      let ans = [];
      for (let i = 0; i < 4; i++) {
         let value = Math.floor(Math.random() * 6);
         ans.push(this.colours[value]);
      }
      this.setState({ answer: ans });
   };

   onChooseHandler = colour => {
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
            <Board
               answer={this.state.answer}
               currentColour={this.state.currentColour}
            />
         </div>
      );
   }
}

export default Mastermind;
