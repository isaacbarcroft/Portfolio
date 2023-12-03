import React from "react";
import { motion } from "framer-motion";

import { Container, Title, Text, GradientText } from "../Greeting/styles";
import { Link } from "react-router-dom";

const Instructor = () => (
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
      <Title>Instructing</Title>
      <Text>
        I've contributed to a code school as both a Teaching Assistant and Lead
        Instructor for a 7-night introductory web development course. In my TA
        role, I provided vital support and fostered a collaborative learning
        environment. As the Lead Instructor, I curated a comprehensive program
        covering HTML, CSS, JavaScript, and Git. This experience deepened my
        understanding of effective pedagogy, emphasizing the importance of
        creating an atmosphere where students thrive and acquire practical
        skills for real-world applications.
      </Text>
      <Link
        to="https://www.carolinacodeschool.org"
        target="_blank"
        className="link"
      >
        <GradientText>Carolina Code School</GradientText>
      </Link>

      <div className="tech-icon-container">
        <div className="tech-icons">React</div>
        <div className="tech-icons">Javascript</div>
        <div className="tech-icons">Python</div>
        <div className="tech-icons">Django</div>
      </div>
    </motion.div>
  </Container>
);
export default Instructor;
