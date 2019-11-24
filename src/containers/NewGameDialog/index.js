import { connect } from "react-redux";

import NewGameDialog from "../../components/NewGameDialog";

import { cancelProjectCreation } from "../../actionCreators/projects";

const mapStateToProps = () => ({ })

const mapDispatchToProps = dispatch => ({
  cancelProjectCreation: () => {
    dispatch(cancelProjectCreation());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewGameDialog);
