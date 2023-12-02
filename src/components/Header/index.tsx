import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  TitleWrapper,
  Title,
  SubTitle,
  GradientText,
} from "./styles";

const Header: React.FC = () => (
  <Container>
    <Link to="/" className="link">
      <TitleWrapper className="shimmer-effect">
        <Title>
          <GradientText>Isaac Barcroft</GradientText>
        </Title>
        <SubTitle>Software Engineer</SubTitle>
      </TitleWrapper>
    </Link>
    <Link to="/" className="link">
      <img
        src={require("/Users/isaacbarcroft/Documents/Portfolio/Portfolio/src/assets/headshot.png")}
        className="App-logo"
        alt="head shot"
        width="150px"
        height="150px"
      />
    </Link>
  </Container>
);

export default Header;
