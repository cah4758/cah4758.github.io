import React from "react";
import ProjectCard from "../components/ProjectCard";
import horiseon from "../images/horiseon.png";
import weatherApp from "../images/weather-app.png";
import password from "../images/pwdGen.gif";
import dayspaw from "../images/daySpaw.gif";
import piaTunes from "../images/piaTunes.gif";

const projectList = [
  {
    id: 1,
    title: "Play It Again Tunes",
    description:
      "Instrument rental service that allows users to select items and provide payment through Stripe.",
    repoLink: "https://github.com/MikeMallonIT/Project3-PlayItAgainTunes",
    appLink: "https://project3-playitagaintunes.herokuapp.com/",
    screenshot: piaTunes,
  },
  {
    id: 2,
    title: "DaySpaw Employee Portal",
    description:
      "Employees of DaySpaw will be able to keep track of appointments for the day as well as input new customers for scheduling.",
    repoLink: "https://github.com/cah4758/dayspaw-mvc",
    appLink: "https://project2-dayspaw.herokuapp.com/login",
    screenshot: dayspaw,
  },
  {
    id: 3,
    title: "Password Generator",
    description:
      "Generate a secure password within parameters set through the prompts on your screen.",
    repoLink: "https://github.com/cah4758/password-generator",
    appLink: "https://cah4758.github.io/password-generator/",
    screenshot: password,
  },
  {
    id: 4,
    title: "Horiseon SEO Refactor",
    description:
      "Refactored into a more accessible site for those who need it.",
    repoLink: "https://github.com/cah4758/horiseon-SEO-refactor",
    appLink: "https://cah4758.github.io/horiseon-SEO-refactor/",
    screenshot: horiseon,
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description:
      "Enter a city into the search field of this app for a 5-day forecast of where you would like to travel.",
    repoLink: "https://github.com/cah4758/weather-dashboard",
    appLink: "https://cah4758.github.io/weather-dashboard/",
    screenshot: weatherApp,
  },
];

export default function Projects() {
  return (
    <>
      <h2 className="text-center">Current Projects</h2>
      <p className="text-center">
        Throughout my learning, I have been lucky to work on a few things
        already. If you have any questions, or even some suggestions, please
        don't hesistate to contact me!
      </p>
      <div className=" row gy-3 gx-3">
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            repoLink={project.repoLink}
            appLink={project.appLink}
            screenshot={project.screenshot}
          />
        ))}
      </div>
    </>
  );
}
