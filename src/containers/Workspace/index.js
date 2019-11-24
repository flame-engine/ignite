import { connect } from "react-redux";

import Workspace from "../../components/Workspace";


const mapStateToProps = ({ projects: { currentProject, creatingNewProject } }) => ({ currentProject, creatingNewProject })

export default connect(mapStateToProps)(Workspace);

