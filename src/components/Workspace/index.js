import React from "react"

import RecentProjects from "../../containers/RecentProjects"
import ProjectPanel from "../../containers/ProjectPanel"

export default ({
  currentProject
}) => (
  <div>
    {
      currentProject ? (
        <ProjectPanel />
      ) : (
        <RecentProjects />
      )
    }
  </div>
)
