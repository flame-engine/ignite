import React from "react"

import "./index.css";
export default ({ currentProject, onCloseProject }) => (
  <div className="panel project-panel">
    <a href="#" onClick={onCloseProject} className="close-project">
      X
    </a>
    <h3>{currentProject.name}</h3>
    <p>
      {`Flame version: ${currentProject.flameVersion}`}
    </p>
  </div>
)
