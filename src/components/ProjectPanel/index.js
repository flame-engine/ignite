import React from "react"

export default ({ currentProject }) => (
  <div className="panel">
    <h3>{currentProject.name}</h3>
    <p>
      {`Flame version: ${currentProject.flameVersion}`}
    </p>
  </div>
)
