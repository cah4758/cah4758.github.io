import React from "react";
import Project from "./Project";

const projectList = [
  {
    id: 1,
    title: "Weather Dashboard",
    description:
      "Enter a city into the search field of this app for a 5-day forecast of where you would like to travel.",
    repoLink: "https://github.com/cah4758/weather-dashboard",
    appLink: "https://cah4758.github.io/weather-dashboard/",
    screenshot: "../images/weather-screenshot.png",
  },
  {
    id: 2,
    title: "Horiseon SEO Refactor",
    description:
      "Refactored into a more accessible site for those who need it.",
    repoLink: "https://github.com/cah4758/horiseon-SEO-refactor",
    appLink: "https://cah4758.github.io/horiseon-SEO-refactor/",
    screenshot: "../images/horiseon-screenshot.png",
  },
  {
    id: 3,
    title: "Password Generator",
    description:
      "Generate a secure password within parameters set through the prompts on your screen.",
    repoLink: "https://github.com/cah4758/password-generator",
    appLink: "https://cah4758.github.io/password-generator/",
    screenshot: "../images/password-generator.png",
  },
  {
    id: 4,
    title: "DaySpaw Employee Portal",
    description:
      "Employees of DaySpaw will be able to keep track of appointments for the day as well as input new customers for scheduling.",
    repoLink: "https://github.com/cah4758/dayspaw-mvc",
    appLink: "https://project2-dayspaw.herokuapp.com/login",
    screenshot: "../images/dayspaw.png",
  },
];

export default function ProjectCard() {
  return projectList.map((project) => (
    <Project
      key={project.id}
      title={project.title}
      description={project.description}
      repoLink={project.repoLink}
      appLink={project.appLink}
      screenshot={project.screenshot}
    />
  ));
}
