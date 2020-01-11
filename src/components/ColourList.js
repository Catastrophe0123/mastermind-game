import React, { Component } from "react";
import Colour from "./Colour";

export class ColourList extends Component {
   // red yellow blue brown green purple

   colours = ["red", "yellow", "blue", "brown", "green", "purple"];
   render() {
      return (
         <div
            style={{
               display: "flex",
               justifyContent: "space-between",
               width: "500px"
            }}>
            <h3>Choose the colors</h3>
            {this.colours.map((colour, index) => {
               return (
                  <Colour
                     onchoose={this.props.chooseHandler}
                     key={index}
                     colour={colour}
                  />
               );
            })}
         </div>
      );
   }
}

export default ColourList;
