import React, { Component } from "react";

export class Rules extends Component {
   state = { toggleRules: false };

   toggleHandler = () => {
      this.setState({ toggleRules: !this.state.toggleRules });
   };

   render() {
      return !this.state.toggleRules ? (
         <button onClick={this.toggleHandler}>Show Rules</button>
      ) : (
         <div>
            {" "}
            <div onClick={this.toggleHandler}> Hide Rules</div>
            <p>
               The codebreaker tries to guess the pattern, in both order and
               color, within eight to twelve turns. Each guess is made by
               placing a row of code pegs on the decoding board. Once placed,
               the codemaker provides feedback by placing from zero to four key
               pegs in the small holes of the row with the guess. A colored or
               black key peg is placed for each code peg from the guess which is
               correct in both color and position. A white key peg indicates the
               existence of a correct color code peg placed in the wrong
               position.
            </p>
            <p>
               If there are duplicate colours in the guess, they cannot all be
               awarded a key peg unless they correspond to the same number of
               duplicate colours in the hidden code. For example, if the hidden
               code is white-white-black-black and the player guesses
               white-white-white-black, the codemaker will award two colored key
               pegs for the two correct whites, nothing for the third white as
               there is not a third white in the code, and a colored key peg for
               the black. No indication is given of the fact that the code also
               includes a second black.
            </p>
         </div>
      );
   }
}

export default Rules;
