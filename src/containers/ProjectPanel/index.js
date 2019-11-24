import { connect } from "react-redux";

import ProjectPanel from "../../components/ProjectPanel";

import { closeCurrentProject } from "../../actionCreators/projects";

const mapStateToProps = ({ projects: { currentProject } }) => ({ currentProject })

const mapDispatchToProps = dispatch => ({
  onCloseProject: () => {
    dispatch(closeCurrentProject());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPanel);


