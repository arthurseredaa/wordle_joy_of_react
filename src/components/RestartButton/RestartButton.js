import React from "react";

function RestartButton({ restartGame }) {
  return (
    <button onClick={restartGame} type="button" className="button">
      Restart
    </button>
  );
}

export default RestartButton;
