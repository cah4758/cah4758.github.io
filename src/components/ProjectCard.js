import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <img
        className="card-img-top h-auto"
        src={props.screenshot}
        alt="Project screenshot"
        style={{ height: "120px" }}
      />
      <div className="card-body bg-secondary" style={{ minHeight: "280px" }}>
        <h4 className="card-title bg-secondary">{props.title}</h4>
        <p className="card-text">{props.description}</p>
        <p className="card-text">Tech Used: {props.tech}</p>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ verticalAlign: "text-bottom" }}
        >
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
