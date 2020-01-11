import React, { Component } from "react";

export class Colour extends Component {
   // red yellow blue brown green purple
   render() {
      console.log("color : ", this.props.colour);
      return (
         <div
            onClick={() =>
               this.props.onchoose(this.props.colour, this.props.id)
            }
            style={{
               height: "40px",
               width: "40px",
               borderRadius: "30px",
               border: "2px black dotted",
               backgroundColor: `${this.props.colour}`
            }}></div>
      );
   }
}

export default Colour;
