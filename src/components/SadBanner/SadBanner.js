import React from "react";
import RestartButton from "../RestartButton";
import { useLanguageContext } from "../LanguageContext";

function SadBanner({ answer, restartGame }) {
  const { isUAVersion } = useLanguageContext();

  return (
    <div className="sad banner">
      <p>
        {isUAVersion ? (
          <strong>Не вгадали, правильна відповідь:</strong>
        ) : (
          <strong>Sorry, the correct answer is:</strong>
        )}{" "}
        <strong>{answer}</strong>.
      </p>
      <RestartButton restartGame={restartGame} />
    </div>
  );
}

export default SadBanner;
