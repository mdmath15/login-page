import styled from "styled-components";

export const Container = styled.div`
  color: var(--brown);
  height: 100%;
  padding: 0 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 1250px) {
    padding: 0 3rem;
  }

  @media (max-width: 900px) {
    display: none;
  }

  h1 {
    font-size: 2.5rem;

    @media (max-width: 1000px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 2rem;

    @media (max-width: 1000px) {
      font-size: 1.5rem;
    }
  }
`
