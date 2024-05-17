import { useEffect, useState } from "react";

import { sample } from "../../utils";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";
import Keyboard from "../Keyboard";
import { useLanguageContext } from "../LanguageContext";

function Game({ words, keyboard }) {
  const { isUAVersion } = useLanguageContext();
  const [answer, setAnswer] = useState();
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("in_progress");
  const isUserWon = gameStatus === "won";
  const isUserLost = gameStatus === "lost";

  const restartGame = () => {
    setGuesses([]);
    setGameStatus("in_progress");
    setAnswer(sample(words));
  };

  useEffect(() => {
    restartGame();
  }, [isUAVersion]);

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
        isUAVersion={isUAVersion}
      />
      <Keyboard guesses={guesses} answer={answer} keyboard={keyboard} />
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
