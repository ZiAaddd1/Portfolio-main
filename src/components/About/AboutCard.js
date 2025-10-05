import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
<div style={{ textAlign: "justify" }}>
  Hi Everyone, I am <span className="purple">Ziad Ashraf </span>
  from <span className="purple"> Cairo, Egypt.</span>
  <br />
  <br />
  I’m a passionate Front-End Developer specializing in React, Angular, JavaScript, HTML, CSS, and Bootstrap. I love creating modern, responsive, and user-friendly web applications with clean code and attractive designs.
  <br />
  <br />
  I’m always eager to learn new technologies, improve my skills, and turn ideas into interactive digital experiences. My goal is to grow as a Front-End Engineer and contribute to impactful projects that make a difference.
</div> <br />
<footer className="blockquote-footer">Ziad Ashraf</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
