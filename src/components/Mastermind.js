import React, { Component } from "react";
import Rules from "./Rules";
import ColourList from "./ColourList";
import Board from "./Board";
import Modal from "./Modal";
import BackDrop from "./BackDrop";

class Mastermind extends Component {
   state = { currentColour: "", answer: [], gameOver: false };
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

   hasWonHandler = () => {
      console.log("i ran");
      this.setState({ gameOver: true });
   };

   onChooseHandler = colour => {
      console.log(colour);
      this.setState({
         currentColour: colour
      });
   };

   displayModal = () => {
      if (this.state.gameOver === true) {
         return (
            <div>
               <Modal>GAME OVER</Modal>
               <BackDrop onclick={this.props.resetHandler} />
            </div>
         );
      }
   };

   render() {
      return (
         <div>
            <h1 style={{ textAlign: "center" }}>MASTERMIND</h1>
            <Rules />
            <ColourList chooseHandler={this.onChooseHandler} />
            <Board
               hasWonHandler={this.hasWonHandler}
               answer={this.state.answer}
               currentColour={this.state.currentColour}
            />
            {this.displayModal()}
         </div>
      );
   }
}

export default Mastermind;
