import React from "react";
import { Container, Title, Text } from "./styles";

const Greeting = () => (
  <Container>
    <Title>Greetings!</Title>
    <Text>
      I'm Isaac Barcroft, a React TypeScript software engineer based in
      Greenville, SC. Between coding sessions, I'm deeply immersed in the world
      of soccer, fueled by an avid passion for the beautiful game.
    </Text>
    <Text style={{ color: "#0bd2d3" }}>
      {" "}
      I specialize in React and TypeScript, my code reflects a blend of
      precision and creativity. Whether it's crafting seamless user experiences
      or navigating the intricacies of a soccer match, I thrive on the thrill of
      the game. Join me on this exciting journey of software innovation and
      soccer enthusiasm!
    </Text>
  </Container>
);
export default Greeting;
