import React from "react";

export default ({
  recentProjects,
  loading,

  onClickOpen,
  onClickNew,
}) => (
  <div className="dependency-panel panel">
    <h2> {loading ? 'Loading' : ''} Recent projects </h2>
    {
      recentProjects.length ? (
        <ul>
          {
            recentProjects.map(project => (
              <li key={project.name}>{ project.name }</li>
            ))
          }
        </ul>
      ) : (
        <p>
          No recent project, open or create a new one using the buttons bellow
        </p>
      )
    }
    <button type="button" onClick={onClickOpen}> Open </button>
    <button type="button" onClick={onClickNew}> New </button>
  </div>
)
