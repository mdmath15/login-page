import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  font-size: 1rem;
  color: var(--bege-claro);
  background: var(--brown);
  border: 0;
  padding: 0 4rem;
  margin-top: 2rem;
  border-radius: 0.5rem;
  height: 3rem;
  transition: filter 0.2s;

  @media (max-width: 900px) {
    color: var(--bege-escuro);
    background: #fff;
    margin: 0 auto;
    margin-top: 2rem;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
