export const setDependency = ({ name, errors = [], warnings = []} = {}) => ({
  type: "SET_DEPENDENCY",
  payload: { name, errors, warnings }
})

export const dependenciesLoaded = () => ({ type: "DEPENDENCIES_LOADED" });
