import React, { Component } from "react";

export class HintCircle extends Component {
   colours = { 1: "red", 2: "white", 3: "black" };

   render() {
      return (
         <div
            style={{
               height: "10px",
               width: "10px",
               borderRadius: "30px",
               border: "2px black solid",
               backgroundColor: `${this.colours[this.props.value]}`
            }}></div>
      );
   }
}

export default HintCircle;
