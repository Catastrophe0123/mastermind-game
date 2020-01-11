import React, { Component } from "react";
import Row from "./Row";

export class Board extends Component {
   render() {
      return (
         <div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, index) => {
               return (
                  <Row key={index} currentColour={this.props.currentColour} />
               );
            })}
         </div>
      );
   }
}

export default Board;
