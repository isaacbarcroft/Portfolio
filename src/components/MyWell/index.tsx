import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container, Title, Text, GradientText } from "../Greeting/styles";

const MyWell = () => (
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
      <Title>My Well Ministry</Title>
      <Text>
        I work full time as a software engineer at My Well, a non-profit
        organization that provides financial services to churches and
        non-profits. I'm responsible for maintaining and developing new features
        for the company's web application, which is built with React and
        TypeScript.
      </Text>
      <Link className="link" to="https://www.mywell.org/" target="_blank">
        <GradientText>My Well</GradientText>
      </Link>
      <div className="tech-icon-container">
        <div className="tech-icons">React Native</div>
        <div className="tech-icons">React</div>
        <div className="tech-icons">Typescript</div>
        <div className="tech-icons">GraphQL</div>
        <div className="tech-icons">Next JS</div>
      </div>
    </motion.div>
  </Container>
);
export default MyWell;
