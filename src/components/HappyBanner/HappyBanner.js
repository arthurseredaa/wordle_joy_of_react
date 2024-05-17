import React from "react";
import Confetti from "react-confetti";
import RestartButton from "../RestartButton";

function HappyBanner({ guessesQuantity, restartGame }) {
  return (
    <>
      <Confetti />
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guessesQuantity} guesses</strong>.
        </p>
        <RestartButton restartGame={restartGame} />
      </div>
    </>
  );
}

export default HappyBanner;
