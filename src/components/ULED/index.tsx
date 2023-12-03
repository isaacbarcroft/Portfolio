import React from "react";
import { motion } from "framer-motion";

import { Container, Title, Text, GradientText } from "../Greeting/styles";
import { Link } from "react-router-dom";

const Uled = () => (
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
      <Title>Universal Ledger</Title>
      <Text>
        I collaborated with a compact design team and a partner web developer to
        bring Universal Ledger's landing page to life, implementing intricate
        and engaging animations to enhance the user experience.
      </Text>
      <Link to="https://www.uled.io" target="_blank" className="link">
        <GradientText>Universal Ledger</GradientText>
      </Link>
      <div className="tech-icon-container">
        <div className="tech-icons">React</div>
        <div className="tech-icons">Typescript</div>
      </div>
    </motion.div>
  </Container>
);
export default Uled;
