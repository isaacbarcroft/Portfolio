import React from "react";
import { Link } from "react-router-dom";
import { Container, Title, Text, GradientText } from "../Greeting/styles";

const Greeting = () => (
  <Container>
    <Title>Agricultural Sales Application</Title>
    <Text>
      I collaborated with{" "}
      <Link
        className="link"
        to="https://purplewrendigital.com/"
        target="_blank"
      >
        Purple Wren Digital
      </Link>{" "}
      and{" "}
      <Link className="link" to="http://nicer.io" target="_blank">
        Nicer Studio
      </Link>{" "}
      on developing an internal sales application for one of the largest
      privately-owned companies globally. If you're curious to learn more about
      this project, feel free to ask!
    </Text>
    <div style={{ display: "flex" }}>
      <div className="tech-icons">React Native</div>
      <div className="tech-icons">Expo</div>
      <div className="tech-icons">Typescript</div>
    </div>
    <Link
      to="https://www.linkedin.com/feed/update/urn:li:activity:7046133779664408576/"
      target="_blank"
      className="link"
    >
      <GradientText>LinkedIn Post: Purple Wren</GradientText>
    </Link>
  </Container>
);
export default Greeting;
