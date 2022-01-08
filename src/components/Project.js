import React from "react";

export default function Project(props) {
  return (
    <div className="col">
      <div className="card col-12 col-m-6 shadow-sm">
        <img
          className="card-img-top"
          src={props.screenshot}
          alt="Project screenshot"
        />
        <div className="card-body bg-secondary">
          <strong>{props.title}</strong>
          <p className="card-text">{props.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <a className="nav-link text-dark" href={props.appLink}>
                  App Link
                </a>
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <a className="nav-link text-dark" href={props.repoLink}>
                  Repo
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
