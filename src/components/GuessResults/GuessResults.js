import React from 'react';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ text, id }) => (
        <p key={id} className="guess">
          {text}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
