const initialState = {
  loading: true,
  entries: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "SET_DEPENDENCY":
      return { ...state, entries: [ ...state.entries, action.payload ] };
    case "DEPENDENCIES_LOADED":
      return { ...state, loading: false }
  }
  return state;
}
