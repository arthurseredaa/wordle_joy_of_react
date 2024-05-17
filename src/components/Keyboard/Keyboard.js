import React from "react";

import { getUniqueCharsData } from "../../game-helpers";
import { clsx } from "../../utils";
import { useLanguageContext } from "../LanguageContext";

function Keyboard({ guesses, answer, keyboard }) {
  const charsData = getUniqueCharsData(guesses, answer);
  const { isUAVersion } = useLanguageContext();

  return (
    <>
      <p style={{ textAlign: "center" }}>
        {isUAVersion ? "Використані букви:" : "Used letters:"}{" "}
      </p>
      <div className="keyboard">
        {keyboard.map((row, index) => (
          <div className="key-row" key={index}>
            {row.split("").map((letter) => {
              const status = charsData.find(
                (item) => item.letter === letter
              )?.status;

              return (
                <div key={letter} className={clsx("key", status)}>
                  {letter}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}

export default Keyboard;
