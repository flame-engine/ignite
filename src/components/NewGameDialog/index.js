import React from "react";

export default ({ cancelProjectCreation }) => (
  <div className="dialog-overlay">
    <div className="dialog-panel">
      <a href="#" onClick={cancelProjectCreation} className="close-icon"> X </a>
      <h3>New Game</h3>
    </div>
  </div>
)
