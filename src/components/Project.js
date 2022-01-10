import React from "react";

export default function Project(props) {
  return (
    <div className="col col-12 col-md-4 col-lg-6">
      <img
        className="card-img-top h-auto"
        src={props.screenshot}
        alt="Project screenshot"
      />
      <div className="card-body bg-secondary">
        <h4 className="card-title bg-secondary">{props.title}</h4>
        <p className="card-text">{props.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <a className="btn text-dark" href={props.appLink}>
              App Link
            </a>
            <a className="btn text-dark" href={props.repoLink}>
              Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
