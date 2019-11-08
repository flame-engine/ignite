import { connect } from "react-redux";

import ProjectPanel from "../../components/ProjectPanel";

const mapStateToProps = ({ projects: { currentProject } }) => ({ currentProject })

export default connect(mapStateToProps)(ProjectPanel);


