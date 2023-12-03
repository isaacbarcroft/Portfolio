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
      I specialize in React, TypeScript, and Node.js, with a wealth of
      experience gained from various freelance projects. Passionate about
      sharing knowledge, I am dedicated to helping others excel in the dynamic
      realm of web development. Open to new opportunities, I also take on
      freelance work to contribute my skills to exciting projects.
    </Text>
  </Container>
);
export default Greeting;
