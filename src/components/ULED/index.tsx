import React from "react";
import { Container, Title, Text, GradientText } from "../Greeting/styles";
import { Link } from "react-router-dom";

const Uled = () => (
  <Container>
    <Title>Universal Ledger</Title>
    <Text>
      I collaborated with a compact design team and a partner web developer to
      bring Universal Ledger's landing page to life, implementing intricate and
      engaging animations to enhance the user experience.
    </Text>
    <div style={{ display: "flex" }}>
      <div className="tech-icons">React</div>
      <div className="tech-icons">Typescript</div>
    </div>
    <Link to="https://www.uled.io" target="_blank" className="link">
      <GradientText>Universal Ledger</GradientText>
    </Link>
  </Container>
);
export default Uled;
