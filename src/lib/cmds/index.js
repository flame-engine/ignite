import { spawn } from "child_process";
import path from "path";

const exec = (cmd, args) => new Promise((resolve, reject) => {
  const c = spawn(cmd, args);

  let stdout = "";
  let stderr = "";

  c.stdout.on("data", data => {
    stdout += data;
  });

  c.stderr.on("data", data => {
    stderr += data;
  });

  c.on("close", code => {
    if (code !== 0) {
      reject(stderr);
    } else {
      resolve(stdout);
    }
  });
});

export const flutterDoctor = () => exec("flutter", [ "doctor"] );

export const flutterCreate = (projectName, org, projectLocation) => exec("flutter", [
  "create",
  "--org", `"${org}"`,
  `${path.join(projectLocation, projectName.toLowerCase().replace(/ /g, "_"))}`,
])
