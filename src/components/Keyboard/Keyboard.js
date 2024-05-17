import React from "react";
import { KEYBOARD } from "../../data";
import { getUniqueCharsData } from "../../game-helpers";

function Keyboard({ guesses, answer }) {
  const charsData = getUniqueCharsData(guesses, answer);

  return (
    <div className="keyboard">
      {KEYBOARD.map((row, index) => (
        <div className="key-row" key={index}>
          {row.split("").map((letter) => {
            const status = charsData.find(
              (item) => item.letter === letter
            )?.status;

            return (
              <div key={letter} className={`key ${status}`}>
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
