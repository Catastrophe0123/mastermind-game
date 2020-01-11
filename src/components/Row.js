import React, { Component } from "react";
import Colour from "./Colour";

export class Row extends Component {
   state = {
      colors: [
         { id: 0, colour: "" },
         { id: 1, colour: "" },
         { id: 2, colour: "" },
         { id: 3, colour: "" }
      ],
      isfull: false
   };
   // state = {colors : [ {0: "blue"}, {1: "red"} ]}
   changeColour = (clr, id) => {
      if (!this.state.isfull) {
         console.log("current colour : ", this.props.currentColour.toString());
         let x = this.state.colors.map(el => {
            if (el.id === id) {
               return { ...el, colour: this.props.currentColour.toString() };
            }
            return el;
         });
         this.setState({ colors: x }, () => {
            let count = 0;
            console.log("state updated");
            for (let i = 0; i < 4; i++) {
               if (this.state.colors[i].colour !== "") {
                  count++;
               }
            }
            if (count === 4) {
               this.setState({ isfull: true });
            }
         });
      }
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
