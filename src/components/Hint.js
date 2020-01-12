import React, { Component } from "react";
import HintCircle from "./HintCircle";

export class Hint extends Component {
   state = {
      hint: [1, 1, 1, 1]
   };

   componentDidMount = () => {
      console.log("hello world from the hint logic fuction");
      // we got the answer and the set entered by the user
      //["red", "yellow", "blue", "brown", "green", "purple"];

      //if value 1 ==== wrong
      //if value 2 ==== wrong but right colour
      //if value 3 ==== right

      let hintValues = [1, 1, 1, 1];
      let coloursInAnswer = [
         { red: 0, pos: [] },
         { yellow: 0, pos: [] },
         { blue: 0, pos: [] },
         { brown: 0, pos: [] },
         { green: 0, pos: [] },
         { purple: 0, pos: [] }
      ];
      //eg coloursInAnswer = [{"red : 1"}, {"purple: 2"}, {"blue: 1"}]
      for (let i = 0; i < 4; i++) {
         for (let j = 0; j < 6; j++) {
            if (Object.keys(coloursInAnswer[j])[0] === this.props.answer[i]) {
               coloursInAnswer[j][Object.keys(coloursInAnswer[j])[0]] += 1;
               coloursInAnswer[j][Object.keys(coloursInAnswer[j])[1]].push(i);
            }
         }
      }
      const filteredValues = coloursInAnswer.filter(
         element => element[Object.keys(element)[0]] !== 0
      );

      //this.props.colours is ["red", "blue","brown", "red"]

      //now coloursInAnswer contains key-value pairs of the repeated colors
      // i is for this.props.colours
      // j is for filteredValues
      let k = 0;
      console.log(filteredValues);
      for (let i = 0; i < 4; i++) {
         for (let j = 0; j < filteredValues.length; j++) {
            if (
               this.props.colours[i]["colour"] ===
                  Object.keys(filteredValues[j])[0] &&
               filteredValues[j][Object.keys(filteredValues[j])[1]].includes(i)
            ) {
               console.log("correct position and colour");
               hintValues[k] = 3;
               k++;
               break;
            } else if (
               this.props.colours[i]["colour"] ===
                  Object.keys(filteredValues[j])[0] &&
               filteredValues[j][Object.keys(filteredValues[j])[1]].includes(
                  i
               ) === false
            ) {
               console.log("correct colour but wrong position");
               hintValues[k] = 2;
               k++;
               continue;
            }
         }
      }
      console.log("hint before sort : ", hintValues);
      hintValues.sort((a, b) => b - a);
      console.log("hint after sort : ", hintValues);
      this.setState({ hint: hintValues });
      //   for (let i = 0; i < 4; i++) {
      //      let y = {};
      //      let x = this.props.answer[i];
      //      y[this.props.answer[i]] = 0;
      //      if (coloursInAnswer.indexOf()) {
      //         y[this.props.answer[i]] = 1;
      //         console.log("im running away");
      //         coloursInAnswer.push(y);
      //      } else {
      //         const ind = coloursInAnswer.indexOf([this.props.answer[i]]);
      //         console.log("ind", ind);
      //         coloursInAnswer[ind][this.props.answer[i]] += 1;
      //         j++;
      //      }
      //   }
      //   console.log("colours in answers : ", coloursInAnswer);

      // ==============================================
      //       console.log(coloursInAnswer);

      //       for (let i = 0; i < 4; i++) {
      //          if (coloursInAnswer.includes(this.props.colours[i])) {
      //             hintValues[i] = 2;
      //          }
      //       }
      //       console.log("hint values : ", hintValues);

      //       for (let i = 0; i < 4; i++) {
      //          if (this.props.answer[i] === this.props.colours[i].colour) {
      //             hintValues[i] = 3;
      //          }
      //       }
      //       this.setState({ hint: hintValues });
   };
   render() {
      return (
         <div>
            {this.state.hint.map((el, index) => {
               return <HintCircle value={el} key={index} id={index} />;
            })}
         </div>
      );
   }
}

export default Hint;
