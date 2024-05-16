import React from "react";
import Confetti from "react-confetti";

function HappyBanner({ guessesQuantity }) {
  return (
    <>
      <Confetti />
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guessesQuantity} guesses</strong>.
        </p>
      </div>
    </>
  );
}

export default HappyBanner;
