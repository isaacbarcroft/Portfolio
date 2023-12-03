import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container, Title, Text, GradientText } from "../Greeting/styles";

const Greeting = () => (
  <Container>
    <motion.div
      initial="offscreen"
      animate="onscreen"
      variants={{
        offscreen: { opacity: 0, x: -50 },
        onscreen: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.8 }}
    >
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
        privately-owned companies globally. If you're curious to learn more
        about this project, feel free to ask!
      </Text>
      <Link
        to="https://www.linkedin.com/feed/update/urn:li:activity:7046133779664408576/"
        target="_blank"
        className="link"
      >
        <GradientText>LinkedIn Post: Purple Wren</GradientText>
      </Link>
      <div className="tech-icon-container">
        <div className="tech-icons">React Native</div>
        <div className="tech-icons">Expo</div>
        <div className="tech-icons">Typescript</div>
      </div>
    </motion.div>
  </Container>
);
export default Greeting;
