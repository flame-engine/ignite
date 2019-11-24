import path from "path";
import { connect } from "react-redux";

import NewGameDialog from "../../components/NewGameDialog";

import { cancelProjectCreation } from "../../actionCreators/projects";

import { flutterCreate } from "../../lib/cmds";

const mapStateToProps = () => ({ })

const mapDispatchToProps = dispatch => ({
  onCreateProject: (projectName, org, projectLocation) => {
    flutterCreate(projectName, org, projectLocation)
      .then(console.log)
      .catch(console.error);

    // TODO finish here
    //  - Add flame and template (Game or BaseGame)
    //  - Add a loading
    //  - Automatically open project
  },
  cancelProjectCreation: () => {
    dispatch(cancelProjectCreation());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewGameDialog);
