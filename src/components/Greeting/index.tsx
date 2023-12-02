import React from "react";
import { Container, Title, Text, GradientText } from "./styles";

const Greeting = () => (
  <Container>
    <Title>
      <GradientText>Greetings!</GradientText>
    </Title>
    <Text>
      I'm Isaac Barcroft, a React TypeScript software engineer based in
      Greenville, SC. When I'm not coding, you'll catch me either on the soccer
      field or delving into the realms of ancient history. I'm always on the
      lookout to learn something new.
    </Text>
    <Text style={{ color: "#0bd2d3" }}>
      {" "}
      My expertise spans React, TypeScript, Node.js, and freelance projects.
      With a passion for teaching, I'm dedicated to helping others achieve
      greatness through sharing my knowledge in the dynamic world of web
      development.
    </Text>
  </Container>
);
export default Greeting;
