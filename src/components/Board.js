import React, { Component } from "react";
import Row from "./Row";

export class Board extends Component {
   state = {
      active: [
         { id: 0, active: true },
         { id: 1, active: false },
         { id: 2, active: false },
         { id: 3, active: false },
         { id: 4, active: false },
         { id: 5, active: false },
         { id: 6, active: false },
         { id: 7, active: false },
         { id: 8, active: false },
         { id: 9, active: false }
      ]
   };

   activeHandler = id => {
      let nextId = id + 1;
      console.log("id : ", id);
      console.log("nextId : ", nextId);
      const x = this.state.active.map(el => {
         if (id === el.id) {
            return { ...el, active: false };
         }
         if (nextId === el.id) {
            return { ...el, active: true };
         }
         return el;
      });
      this.setState({ active: x });
   };

   render() {
      return (
         <div>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, index) => {
               return (
                  <Row
                     answer={this.props.answer}
                     activeHandler={this.activeHandler}
                     key={index}
                     rowId={index}
                     isActive={this.state.active[index].active}
                     currentColour={this.props.currentColour}
                  />
               );
            })}
         </div>
      );
   }
}

export default Board;
