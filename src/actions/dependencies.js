const commandExists = window.require("command-exists");

import { setDependency, dependenciesLoaded } from "../actionCreators/dependencies";

import { flutterDoctor } from "../lib/cmds";
import { parseFlutterDoctor } from "../lib/flutter-doctor-parser";

const fetchFlutter = () => dispatch =>
  commandExists("flutter")
    .then(() =>
      flutterDoctor()
        .then(parseFlutterDoctor)
      .then(status => {
        dispatch(setDependency({
          name: "Flutter", 
        }));

        dispatch(setDependency({
          name: "Android", 
          ...status.android
        }));

        dispatch(setDependency({
          name: "iOS", 
          ...status.ios
        }));
      })
    )
    .catch(() => {
      dispatch(setDependency({
        name: "Flutter", 
        errors: ["Flutter is not installed"]
      }))
    });

export const fetchDependencies = () => dispatch => 
  Promise.all([
    dispatch(fetchFlutter())
  ]).then(() => {
    dispatch(dependenciesLoaded());
  })
