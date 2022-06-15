import styled from "styled-components";

export interface ButtonProps {
  bgColor?: string
  color?: string
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  font-size: 1rem;
  color: ${props => props.color};
  background: ${props => props.bgColor};
  border: 0;
  padding: 0 4rem;
  border-radius: 0.5rem;
  height: 3rem;
  transition: filter 0.2s;

  a {
    color: inherit;
  }

  @media (max-width: 900px) {
    color: ${props => props.color};
    background: #fff;
    margin: 0 auto;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
