import { connect } from "react-redux";

import RecentProjects from "../../components/RecentProjects";

import { remote } from "electron";

const { dialog } = remote;

const mapStateToProps = ({ projects: { recentProjects } }) => ({ recentProjects })

const mapDispatchToProps = dispatch => ({
  onClickNew: () => {
  },
  onClickOpen: () => {
    dialog.showOpenDialog({
      filters: [ { name: "pubspec.yaml" } ]
    }, (fileName) => {
      console.log(fileName);
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RecentProjects);
