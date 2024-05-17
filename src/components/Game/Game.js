import React, { useEffect, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";
import Keyboard from "../Keyboard";

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("in_progress");
  const isUserWon = gameStatus === "won";
  const isUserLost = gameStatus === "lost";

  useEffect(() => {
    console.info({ answer });
  }, [answer]);

  const addNewGuess = (text) => {
    if (text === answer) {
      setGameStatus("won");
    } else if (guesses.length + 1 === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }

    setGuesses([
      ...guesses,
      {
        text,
        id: crypto.randomUUID(),
      },
    ]);
  };

  const restartGame = () => {
    setGuesses([]);
    setGameStatus("in_progress");
    setAnswer(sample(WORDS));
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
      <Keyboard guesses={guesses} answer={answer} />
      {isUserWon && (
        <HappyBanner
          guessesQuantity={guesses.length}
          restartGame={restartGame}
        />
      )}
      {isUserLost && <SadBanner answer={answer} restartGame={restartGame} />}
    </>
  );
}

export default Game;
