import React, { Component } from "react";
import Colour from "./Colour";

export class Row extends Component {
   state = {
      colors: [
         { id: 0, colour: "blue" },
         { id: 1, colour: "" },
         { id: 2, colour: "" },
         { id: 3, colour: "" }
      ]
   };
   // state = {colors : [ {0: "blue"}, {1: "red"} ]}
   changeColour = (clr, id) => {
      console.log("current colour : ", this.props.currentColour.toString());
      let x = this.state.colors.map(el => {
         if (el.id === id) {
            return { ...el, colour: this.props.currentColour.toString() };
         }
         return el;
      });
      this.setState({ colors: x });

      console.log(this.specificColour);
   };

   render() {
      return (
         <div
            style={{
               display: "flex",
               justifyContent: "space-between",
               width: "200px"
            }}>
            {[1, 2, 3, 4].map((el, index) => {
               return (
                  <Colour
                     onchoose={this.changeColour}
                     key={index}
                     id={index}
                     colour={this.state.colors[index].colour}
                  />
               );
            })}
         </div>
      );
   }
}

export default Row;
