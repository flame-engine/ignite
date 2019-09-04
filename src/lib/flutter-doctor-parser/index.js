// Not happy with this, need to find a better solution to be able to  use this on Electron and jest testings
if (!window.require) {
  window.require = require
}

const os = window.require("os");

const parseCategory = (lines, textRef, obj) => {
  let i = lines.findIndex(line => line.indexOf(textRef) !== -1) + 1;

  while (lines[i].startsWith("    ") && i < lines.length) {
    const l = lines[i].replace("    ", "");

    if (l.startsWith("!")) {
      obj.warnings.push(l);
    } else if (l.startsWith("✗")) {
      obj.warnings.push(l);
    }
    i++;
  }
}

export const parseFlutterDoctor = flutterDoctorOutput => {
  const status = {
    version: null,
    android: {
      errors: [],
      warnings: [],
    },
    ios: {
      errors: [],
      warnings: [],
    }
  }

  const lines = flutterDoctorOutput.split(os.EOL);

  const flutterLine = lines.find(l => l.indexOf("] Flutter ") !== -1)
  const version = flutterLine.replace(/.* Flutter \((.*)\)/, "$1")
  status.version = version;

  parseCategory(lines, "Android toolchain", status.android);
  parseCategory(lines, "Xcode - develop", status.android);

  return status;
}
