import React, { useState } from "react";
import { useLanguageContext } from "../LanguageContext";

function GuessInput({ addNewGuess, isGuessingAllowed }) {
  const [guessValue, setGuessValue] = useState("");
  const handleChange = (e) => setGuessValue(e.target.value.toUpperCase());
  const { isUAVersion } = useLanguageContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    setGuessValue("");

    addNewGuess(guessValue);
  };

  const pattern = isUAVersion ? "[а-яА-ЯҐЄІЇґєії]{5}" : "[a-zA-Z]{5}";

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">
        {isUAVersion ? "Введіть слово:" : "Enter guess:"}
      </label>
      <input
        id="guess-input"
        type="text"
        value={guessValue}
        onChange={handleChange}
        pattern={pattern}
        disabled={!isGuessingAllowed}
      />
    </form>
  );
}

export default GuessInput;
