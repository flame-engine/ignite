import fs from "fs"
import yaml from "js-yaml"

import { recentProjectsLoaded, openProject, addRecentProject } from "../actionCreators/projects"

export const fetchRecentProjects = () => dispatch => {
  const raw = localStorage.getItem("RECENT_PROJECTS")

  if (raw) {
    const projects = JSON.parse(raw);
    dispatch(recentProjectsLoaded(projects))
  } else {
    dispatch(recentProjectsLoaded([]))
  }
}

export const loadProject = fileName => dispatch => {
  const data = fs.readFileSync(fileName, "utf8")
  const pubspec = yaml.safeLoad(data)

  const project = {
    fileName,
    name: pubspec.name,
    // TODO this is not the best way, we should cover all the possibilities like path and etc
    flameVersion: JSON.stringify(pubspec.dependencies.flame)
  }

  dispatch(openProject(project))
  dispatch(addRecentProject(project))
}

