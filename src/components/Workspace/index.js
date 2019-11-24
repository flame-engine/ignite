import React from "react"

import RecentProjects from "../../containers/RecentProjects"
import ProjectPanel from "../../containers/ProjectPanel"
import NewGameDialog from "../../containers/NewGameDialog"

export default ({
  currentProject,
  creatingNewProject,
}) => (
  <div>
    {
      currentProject ? (
        <ProjectPanel />
      ) : (
        <RecentProjects />
      )
    }
    { creatingNewProject && <NewGameDialog /> }
  </div>
)
