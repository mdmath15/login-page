import styled from "styled-components";

export const Container = styled.div`
  color: var(--brown);
  height: 100%;
  padding: 6rem 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 1250px) {
    padding: 6rem 3rem;
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

  div {
    position: relative;
    top: 64px;
  
    @media (max-width: 1000px) {
      max-width: 340px;
    }
  }
`
