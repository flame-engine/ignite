import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import { fetchDependencies } from "./actions/dependencies";
import { fetchRecentProjects } from "./actions/projects";

import DependencyPanel from "./containers/DependencyPanel";
import RecentProjects from "./containers/RecentProjects";

import "./icons";
import "./main.css";
import "./theme.css";

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk),
);

const Index = () => (
  <Provider store={store}>
    <RecentProjects />
    <DependencyPanel />
  </Provider>
);

store.dispatch(fetchDependencies());
store.dispatch(fetchRecentProjects());

ReactDOM.render(<Index />, document.getElementById("app"));

