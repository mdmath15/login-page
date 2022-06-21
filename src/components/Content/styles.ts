import styled, { keyframes } from 'styled-components'

const visible = keyframes`
  0% {
    transform: translateX(-90%);
  }
  100% {
    transform:  translateX(0);
  }
`

export const Container = styled.div`
  animation: ${visible} 500ms ease-in-out;
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
