import { spawn } from "child_process";

const exec = (cmd, args) => new Promise((resolve, reject) => {
  const c = spawn(cmd, args);

  let stdout = "";

  c.stdout.on("data", data => {
    stdout += data;
  });

  c.on("close", code => {
    if (code !== 0) {
      reject();
    } else {
      resolve(stdout);
    }
  });
});

export const flutterDoctor = () => exec("flutter", [ "doctor"] );
