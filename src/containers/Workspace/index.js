import { connect } from "react-redux";

import Workspace from "../../components/Workspace";


const mapStateToProps = ({ projects: { currentProject } }) => ({ currentProject })

export default connect(mapStateToProps)(Workspace);

