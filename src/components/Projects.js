import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import budgetTracker from "../images/budget-tracker.gif";
import weatherApp from "../images/weather-app.gif";
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
    tech: "ChakraUI, Express, Redux, Stripe",
  },
  {
    id: 2,
    title: "DaySpaw Employee Portal",
    description:
      "Employees of DaySpaw will be able to keep track of appointments for the day as well as input new customers for scheduling.",
    repoLink: "https://github.com/cah4758/dayspaw-mvc",
    appLink: "https://project2-dayspaw.herokuapp.com/login",
    screenshot: dayspaw,
    tech: "Handlebars, Materialize, Express, MySQL, Node.js",
  },
  {
    id: 3,
    title: "Password Generator",
    description:
      "Generate a secure password within parameters set through the prompts on your screen.",
    repoLink: "https://github.com/cah4758/password-generator",
    appLink: "https://cah4758.github.io/password-generator/",
    screenshot: password,
    tech: "JavaScript",
  },
  {
    id: 4,
    title: "Budget Tracker",
    description:
      "Users can keep track of finances with added offline functionality.",
    repoLink: "https://github.com/cah4758/budget-tracker",
    appLink: "https://budget-tracker-4758.herokuapp.com/",
    screenshot: budgetTracker,
    tech: "JavaScript, indexedDb",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description:
      "Enter a city into the search field of this app for a 5-day forecast of where you would like to travel.",
    repoLink: "https://github.com/cah4758/weather-dashboard",
    appLink: "https://cah4758.github.io/weather-dashboard/",
    screenshot: weatherApp,
    tech: "JavaScript",
  },
];

export default function Projects() {
  return (
    <Container id="projects" className="section">
      <h2 className="text-center">Past Projects</h2>
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
            tech={project.tech}
          />
        ))}
      </div>
    </Container>
  );
}
