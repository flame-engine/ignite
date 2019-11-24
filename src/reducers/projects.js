const initialState = {
  currentProject: null,
  recentProjects: [],
  loadingRecentProjects: true,
  creatingNewProject: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "OPEN_PROJECT_CREATION":
      return { ...state, creatingNewProject: true };
    case "CANCEL_PROJECT_CREATION":
      return { ...state, creatingNewProject: false };
    case "RECENT_PROJECTS_LOADED":
      return { ...state, recentProjects: action.payload, loadingRecentProjects: false }
    case "OPEN_PROJECT":
      return { ...state, currentProject: action.payload };
    case "ADD_RECENT_PROJECT":
      return {
        ...state,
        recentProjects: [ ...state.recentProjects, action.payload ]
      };
    case "CLOSE_CURRENT_PROJECT": {
      return {
        ...state,
        currentProject: null
      }
    }
  }
  return state;
}

