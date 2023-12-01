import React from "react";
import { Container, TitleWrapper, Title, SubTitle } from "./styles";

type HeaderProps = {
  setShowMainApp: (showMainApp: boolean) => void;
};

const Header: React.FC<HeaderProps> = ({ setShowMainApp }) => (
  <Container>
    <TitleWrapper
      onClick={() => setShowMainApp(true)}
      className="shimmer-effect"
    >
      <Title>Isaac Barcroft</Title>
      <SubTitle>Software Engineer</SubTitle>
    </TitleWrapper>
    <img
      src={require("/Users/isaacbarcroft/Documents/Portfolio/Portfolio/src/assets/headshot.png")}
      className="App-logo"
      alt="head shot"
      width="150px"
      height="150px"
      onClick={() => setShowMainApp(true)}
    />
  </Container>
);

export default Header;
