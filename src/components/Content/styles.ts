import styled from 'styled-components'

export const Container = styled.div`
  justify-self: flex-start;
  color: var(--brown);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 3rem;

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
