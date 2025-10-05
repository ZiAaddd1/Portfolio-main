import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiVercel,
  SiGithub,
  SiFigma,
  SiWindows,
} from "react-icons/si";
import "./Toolstack.css";

const tools = [
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiSlack />, name: "Slack" },
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiWindows />, name: "Windows" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, idx) => (
        <Col
          key={idx}
          xs={4}
          md={2}
          className="tech-icons"
          title={tool.name}
          aria-label={tool.name}
        >
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
