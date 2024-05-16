import React, { useState } from 'react';

function GuessInput({ addNewGuess }) {
  const [guessValue, setGuessValue] = useState('');

  const handleChange = (e) => setGuessValue(e.target.value.toUpperCase());

  const handleSubmit = (e) => {
    e.preventDefault();

    setGuessValue('');

    addNewGuess(guessValue);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guessValue}
        onChange={handleChange}
        pattern="\w{5,5}"
      />
    </form>
  );
}

export default GuessInput;
