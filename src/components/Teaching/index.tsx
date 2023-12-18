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
        I contribute to{" "}
        <Link
          className="link"
          to="https://www.carolinacodeschool.org"
          target="_blank"
        >
          Carolina Code School
        </Link>{" "}
        as both the Teaching Assistant for the immersive 12-week course, and as
        the Lead Instructor for the 7-night introductory web development course.
        In my TA role, I provided vital support and foster a collaborative
        learning environment. As the Lead Instructor, I curated a comprehensive
        program covering HTML, CSS, JavaScript, and Git. This experience
        enhanced my grasp of effective teaching methods, underscoring the
        significance of cultivating an environment that empowers students to
        excel and gain practical skills relevant to real-world scenarios.
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
