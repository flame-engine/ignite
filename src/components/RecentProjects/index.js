import React from "react";

export default ({
  recentProjects,
  loading,

  onOpenProject,
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
              <a href="#" onClick={() => onOpenProject(project)}>
                <li key={project.name}>{ project.name }</li>
              </a>
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
