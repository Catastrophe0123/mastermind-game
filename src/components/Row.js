import React, { Component } from "react";
import Colour from "./Colour";
import Hint from "./Hint";

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
      if (!this.state.isfull && this.props.isActive === true) {
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
               console.log("disabled / full");
               this.setState({ isfull: true });
               this.props.activeHandler(this.props.rowId);
            }
         });
      }
   };

   displayHint = () => {
      if (this.state.isfull) {
         return <Hint answer={this.props.answer} colours={this.state.colors} />;
      }
   };

   render() {
      return (
         <div style={{ display: "flex" }}>
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
            <div>{this.displayHint()}</div>
         </div>
      );
   }
}

export default Row;
