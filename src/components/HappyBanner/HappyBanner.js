import React from "react";
import Confetti from "react-confetti";
import RestartButton from "../RestartButton";
import { useLanguageContext } from "../LanguageContext";

function HappyBanner({ guessesQuantity, restartGame }) {
  const { isUAVersion } = useLanguageContext();

  return (
    <>
      <Confetti />
      <div className="happy banner">
        {isUAVersion ? (
          <p>
            <strong>Чудово!</strong> Ви відгадали за{" "}
            <strong>{guessesQuantity} спроби</strong>.
          </p>
        ) : (
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guessesQuantity} guesses</strong>.
          </p>
        )}
        <RestartButton restartGame={restartGame} />
      </div>
    </>
  );
}

export default HappyBanner;
