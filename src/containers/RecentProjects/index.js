import { connect } from "react-redux";

import RecentProjects from "../../components/RecentProjects";

import { loadProject } from "../../actions/projects";

import { openProject, openProjectCreation } from "../../actionCreators/projects"

import { remote } from "electron";

const { dialog } = remote;

const mapStateToProps = ({ projects: { recentProjects } }) => ({ recentProjects })

const mapDispatchToProps = dispatch => ({
  onClickNew: () => {
    dispatch(openProjectCreation())
  },
  onOpenProject: project => {
    dispatch(openProject(project))
  },
  onClickOpen: () => {
    dialog.showOpenDialog({
      filters: [ { name: "pubspec.yaml" } ]
    }, ([ fileName ]) => {
      if (fileName) {
        dispatch(loadProject(fileName))
      }
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RecentProjects);
