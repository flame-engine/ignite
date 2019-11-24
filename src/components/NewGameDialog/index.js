import React, { useState } from "react";
import { remote } from "electron";

const { dialog } = remote;

export default ({ cancelProjectCreation, onCreateProject }) => {
  const [ projectName, setProjectName ] = useState("");
  const [ org, setOrg ] = useState("");
  const [ projectLocation, setProjectLocation ] = useState("");

  return (
    <div className="dialog-overlay">
      <div className="dialog-panel">
        <a href="#" onClick={cancelProjectCreation} className="close-icon"> X </a>
        <h3>New Game</h3>

        <div>
          <label>Project name</label>
          <input type="text" value={projectName} onChange={e => setProjectName(e.target.value)} />
        </div>

        <div>
          <label>Organization (ex: com.gamestudioname)</label>
          <input type="text" value={org} onChange={e => setOrg(e.target.value)} />
        </div>

        <div>
          <label>{projectLocation || "No destination folder selected"}</label>
          <input type="button" value="Select destination folder" onClick={() => {
            dialog.showOpenDialog({ properties: ["openDirectory"]}, ([ path ]) => {
              setProjectLocation(path);
            });
          }}/>
        </div>

        <div>
          <input type="button" value="Create project" onClick={() => onCreateProject(projectName, org, projectLocation)} />
        </div>
      </div>
    </div>
  )
}
