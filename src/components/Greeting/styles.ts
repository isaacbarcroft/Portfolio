import styled from "styled-components";
import "../../fonts/BroadwayD.ttf";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;
  font-weight: 600;
  color: #f990e8;
  margin: 0 16px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    margin-bottom: 16px;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-family: BroadwayD;
  font-size: 2rem;
  margin-bottom: 8px;
`;

export const GradientText = styled.span`
  background: linear-gradient(90deg, #0bd2d3, #f990e8);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: BroadwayD;
`;
export const Text = styled.div`
  color: #0bd2d3;
  margin-bottom: 16px;
`;
