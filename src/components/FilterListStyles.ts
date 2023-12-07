import styled from "styled-components";

export const FilterListHeader = styled.header`
  width: 100%;
  background-color: #f97316;

  @media (max-width: 768px) {
    padding: 20px 0;
  }

  @media (max-width: 480px) {
    padding: 10px 0;
  }

  @media (max-width: 320px) {
    padding: 5px 0;
  }

  nav{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
  }
`;

export const FilterLabel = styled.li<{ $isSelected: boolean }>`
    margin: 0 5px;
    font-size: 14px;
    color: #fff7ed;
    cursor: pointer;
    font-weight: ${(props) => (props.$isSelected ? "bold" : "normal")};
    text-decoration: ${(props) => (props.$isSelected ? "underline" : "none")};

    @media (max-width: 480px) {
    font-size: 12px;
  }

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 320px) {
    font-size: 10px;
  }
`;