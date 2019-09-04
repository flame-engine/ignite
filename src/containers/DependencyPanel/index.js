import { connect } from "react-redux";

import DependencyPanel from "../../components/DependencyPanel";

const mapStateToProps = ({ dependencies: { entries, loading } }) => ({ dependencies: entries, loading })

export default connect(mapStateToProps)(DependencyPanel);
