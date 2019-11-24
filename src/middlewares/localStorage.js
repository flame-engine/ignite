const middleware = store => next => action => {
  if (action.type == 'ADD_RECENT_PROJECT') {
    const project = action.payload;
    const { projects: { recentProjects } } = store.getState();

    const result = recentProjects.find(p => p.name === project.name);

    if (!result) {
      recentProjects.push(project);

      localStorage.setItem("RECENT_PROJECTS", JSON.stringify(recentProjects));
    }
  }

  next(action);
}

export default middleware
