import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDatabase,
  DiAngularSimple,
  DiHtml5,
  DiCss3,
  DiBootstrap,
} from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import "./Techstack.css";

const techIcons = [
  { icon: <CgCPlusPlus />, name: "C++" },
  { icon: <DiHtml5 />, name: "HTML" },        // ✅ HTML
  { icon: <DiCss3 />, name: "CSS" },          // ✅ CSS
  { icon: <DiBootstrap />, name: "Bootstrap" }, // ✅ Bootstrap
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <DiAngularSimple />, name: "Angular" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <DiDatabase />, name: "SQL" },
  { icon: <DiPython />, name: "Python" },
  { icon: <DiJava />, name: "Java" },
  { icon: <DiGit />, name: "Git" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((tech, idx) => (
        <Col
          key={idx}
          xs={4}
          md={2}
          className="tech-icons"
          title={tech.name}
          aria-label={tech.name}
        >
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
