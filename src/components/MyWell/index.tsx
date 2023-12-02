import React from "react";
import { Link } from "react-router-dom";
import { Container, Title, Text, GradientText } from "../Greeting/styles";

const MyWell = () => (
  <Container>
    <Title>My Well Ministry</Title>
    <Text>
      I work full time as a software engineer at My Well, a non-profit
      organization that provides financial services to churches and non-profits.
      I'm responsible for maintaining and developing new features for the
      company's web application, which is built with React and TypeScript.
    </Text>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div className="tech-icons">React Native</div>
      <div className="tech-icons">React</div>
      <div className="tech-icons">Typescript</div>
      <div className="tech-icons">GraphQL</div>
      <div className="tech-icons">Next JS</div>
    </div>
    <Link className="link" to="https://www.mywell.org/" target="_blank">
      <GradientText>My Well</GradientText>
    </Link>
  </Container>
);
export default MyWell;
