const initialState = {
  currentProject: null,
  recentProjects: [],
  loadingRecentProjects: true,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "RECENT_PROJECTS_LOADED":
      return { ...state, recentProjects: action.payload, loadingRecentProjects: false }
    case "OPEN_PROJECT":
      return { ...state, currentProject: action.payload };
    case "ADD_RECENT_PROJECT":
      return {
        ...state,
        recentProjects: [ ...state.recentProjects, action.payload ]
      };
  }
  return state;
}

