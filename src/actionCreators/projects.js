export const recentProjectsLoaded = projects => ({
  type: "RECENT_PROJECTS_LOADED",
  payload: projects
});

export const addRecentProject = project => ({
  type: "ADD_RECENT_PROJECT",
  payload: project
})

export const openProject = project => ({
  type: "OPEN_PROJECT",
  payload: project
})

export const closeCurrentProject = () => ({
  type: "CLOSE_CURRENT_PROJECT",
});
