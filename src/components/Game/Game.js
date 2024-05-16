import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("in_progress");
  const isUserWon = gameStatus === "won";
  const isUserLost = gameStatus === "lost";

  const addNewGuess = (text) => {
    if (text === answer) {
      setGameStatus("won");
    } else if (guesses.length + 1 === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
      return;
    }

    setGuesses([
      ...guesses,
      {
        text,
        id: crypto.randomUUID(),
      },
    ]);
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        addNewGuess={addNewGuess}
        isGuessingAllowed={
          guesses.length < NUM_OF_GUESSES_ALLOWED &&
          gameStatus === "in_progress"
        }
        gameStatus={gameStatus}
      />
      {isUserWon && <HappyBanner guessesQuantity={guesses.length} />}
      {isUserLost && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
