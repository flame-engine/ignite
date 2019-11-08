import { recentProjectsLoaded } from "../actionCreators/projects"

export const fetchRecentProjects = () => dispatch => {
  const raw = localStorage.getItem("RECENT_PROJECTS")

  if (raw) {
    const projects = JSON.parse(raw);
    dispatch(recentProjectsLoaded(projects))
  } else {
    dispatch(recentProjectsLoaded([]))
  }
}
