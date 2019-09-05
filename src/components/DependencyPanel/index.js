import React from "react";

export default ({ dependencies, loading }) => (
  <div className="dependency-panel panel">
    <h2>Installation</h2>
    {
      loading
        ? "Loading..."
        : (<ul>
          {
            dependencies.map(dep => {
              const hasWarnings = dep.warnings.length === 0;
              const isOk = dep.errors.length === 0 && !hasWarnings;

              return (
                <li key={`dependency-${dep.name}`} className={isOk ? "dependency-ok" : hasWarnings ? "dependency-warning" : "dependency-error"}>
                  { dep.warnings.length ? "! - " : dep.errors.length ? "X - " : "OK - " }{dep.name}
                  {
                    dep.warnings
                      ? (
                        <ul>
                          {
                            dep.warnings.map(warning => (
                              <li>{warning}</li>
                            ))
                          }
                        </ul>
                      )
                      : null
                  }
                </li>
              )
            })
          }
        </ul>)
    }
  </div>
)
