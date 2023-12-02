import styled from "styled-components";
import "../../fonts/BroadwayD.ttf";
import "../../App.css";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 3rem;
  font-family: BroadwayD;
`;
export const GradientText = styled.span`
  background: linear-gradient(90deg, #f990e8, #0bd2d3);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  transition: background 0.3s ease; /* Add a smooth transition effect */

  &:hover {
    background: linear-gradient(90deg, #0bd2d3, #f990e8);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const SubTitle = styled.div`
  color: #f990e8;
  font-style: italic;
  font-family: BroadwayD;
`;
