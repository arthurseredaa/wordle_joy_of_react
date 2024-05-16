import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const addNewGuess = (text) => {
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
      <GuessResults guesses={guesses} />
      <GuessInput addNewGuess={addNewGuess} />
    </>
  );
}

export default Game;
