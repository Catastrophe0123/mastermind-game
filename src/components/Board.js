import React, { Component } from "react";
import Row from "./Row";

export class Board extends Component {
   render() {
      return (
         <div>
            <Row currentColour={this.props.currentColour} />
         </div>
      );
   }
}

export default Board;
