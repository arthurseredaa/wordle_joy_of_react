import React, { useState } from "react";

function GuessInput({ addNewGuess, isGuessingAllowed }) {
  const [guessValue, setGuessValue] = useState("");
  const handleChange = (e) => setGuessValue(e.target.value.toUpperCase());

  const handleSubmit = (e) => {
    e.preventDefault();

    setGuessValue("");

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
        pattern="[a-zA-Z]{5}"
        disabled={!isGuessingAllowed}
      />
    </form>
  );
}

export default GuessInput;
