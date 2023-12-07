import styled, { createGlobalStyle } from "styled-components";
import { ORDERSTATUS } from "./data";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', 'Roboto', sans-serif;
    background-color: #fff7ed;
  }
`;

export const GeneralContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  border: 1px solid #f97316;
  border-radius: 3px;
  height: auto;
  min-height: 100vh;
`;

export const FlexContainer = styled.div<{ column?: string; center?: string }>`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) => (props.center ? "center" : "space-between")};
  align-items: ${(props) => (props.center ? "center" : "flex-start")};
  flex-wrap: wrap;
`;

export const Button = styled.button<{ $buttonstyle?: string }>`
  background-color: ${(props) =>
  (props.$buttonstyle === ORDERSTATUS.IN_PROCESS ? "#f97316" :
    props.$buttonstyle === ORDERSTATUS.CANCELLED ? "#dc2626" : "#059669")};
  color: #fff7ed;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) =>
  (props.$buttonstyle === ORDERSTATUS.IN_PROCESS ? "#fb923c" :
    props.$buttonstyle === ORDERSTATUS.CANCELLED ? "#ef4444" : "#10b981")};
    color: #fff7ed;
    transform: scale(1.05);
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #f97316;
  border-radius: 3px;
  height: auto;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
    background-color: #fed7aa;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #f97316;
  text-align: center;
`;

export const FilterTitle = styled.p`
  font-size: 20px;
  color: #f97316;
  text-align: center;
`;
