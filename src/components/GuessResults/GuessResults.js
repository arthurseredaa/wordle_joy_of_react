import React from "react";

import { clsx, range } from "../../utils";
import {
  NUM_OF_GUESSES_ALLOWED,
  GUESS_CHARACTERS_ALLOWED,
} from "../../constants";
import { checkGuess } from "../../game-helpers";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, wordIndex) => {
        const word = guesses?.[wordIndex];

        const wordId = word?.id || crypto.randomUUID();

        const checkResult = word && checkGuess(word.text, answer); // letter, status

        console.log(checkResult);
        return (
          <p className="guess" key={wordId}>
            {range(GUESS_CHARACTERS_ALLOWED).map((_, charIndex) => {
              const character = word?.text?.[charIndex];
              const status = checkResult?.[charIndex]?.status;

              return (
                <span
                  className={clsx("cell", status)}
                  key={`${charIndex}-${wordId}`}
                >
                  {character}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
