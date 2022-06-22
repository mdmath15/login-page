import styled from "styled-components";
import { AppColors } from "../../styles/global"

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
  color: ${(props) => props.color};
  background: ${(props) => props.bgColor};
  border: 0;
  padding: 0 4rem;
  border-radius: 0.5rem;
  height: 3rem;
  transition: filter 0.2s;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  a {
    color: inherit;
  }

  @media (max-width: 900px) {
    color:${AppColors.brown};
    background: ${AppColors.white};
    margin: 0 auto;
  }

  &:hover {
    filter: brightness(0.8);
  }
`
