import React from 'react';
import { range } from '../../utils';
import {
  NUM_OF_GUESSES_ALLOWED,
  GUESS_CHARACTERS_ALLOWED,
} from '../../constants';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, wordIndex) => {
        const word = guesses?.[wordIndex];

        const wordId = word?.id || crypto.randomUUID();

        return (
          <p className="guess" key={wordId}>
            {range(GUESS_CHARACTERS_ALLOWED).map((_, charIndex) => (
              <span className="cell" key={`${charIndex}-${wordId}`}>
                {word?.text?.[charIndex]}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
