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
  color: #f990e8;
`;

export const SubTitle = styled.div`
  color: #f990e8;
  font-style: italic;
  font-family: BroadwayD;
`;
