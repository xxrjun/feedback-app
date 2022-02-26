import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or a service.</p>
        <div>
          <p>
            Learn From:{" "}
            <a
              target="_blank"
              href="https://www.udemy.com/course/react-front-to-back-2022/"
              rel="noreferrer"
            >
              React Front to Back 2022
            </a>
          </p>
          <p>
            My GitHub:{" "}
            <a
              target="_blank"
              href="https://github.com/xxrjun"
              rel="noreferrer"
            >
              xxrjun
            </a>
          </p>
          <p>
            GitHub Repo:{" "}
            <a
              target="_blank"
              href="https://github.com/xxrjun/feedback-app"
              rel="noreferrer"
            >
              Feedback-APP Repo
            </a>
          </p>
          <p>
            <Link to="/">Back To Homepage</Link>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default AboutPage;
