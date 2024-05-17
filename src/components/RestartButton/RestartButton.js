import React from "react";
import { useLanguageContext } from "../LanguageContext";

function RestartButton({ restartGame }) {
  const { isUAVersion } = useLanguageContext();

  return (
    <button onClick={restartGame} type="button" className="button">
      {isUAVersion ? "Ще раз" : "Restart"}
    </button>
  );
}

export default RestartButton;
