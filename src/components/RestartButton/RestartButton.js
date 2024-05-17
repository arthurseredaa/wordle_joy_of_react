import React from "react";

function RestartButton({ restartGame }) {
  return (
    <button
      onClick={restartGame}
      type="button"
      style={{ borderBottom: "2px solid #A9A9A9" }}
    >
      Restart
    </button>
  );
}

export default RestartButton;
