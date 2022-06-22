import styled, { keyframes } from 'styled-components'
import { AppColors } from '../../styles/global'

const visible = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-200px);
  }
  100% {
    opacity: 1;
    transform:  translateY(0);
  }
`

export const Container = styled.form`
  animation: ${visible} 500ms ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem;
  border-radius: 0.5rem;
  min-height: 500px;
  width: 100%;
  max-width: 460px;
  background: ${AppColors.white};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  @media (max-width: 1150px) {
    max-width: 420px;
  }

  @media (max-width: 900px) {
    gap: 3rem;
    margin: 0 auto;
    background: none;
    justify-content: center;
    animation: none;
  }

  h1 {
    font-size: 2.5rem;
    color: ${AppColors.caramelo};

    @media (max-width: 900px) {
      color: ${AppColors.begeEscuro};
    }
  }

  p {
    font-size: 1rem;
    color: ${AppColors.brown};

    @media (max-width: 900px) {
      color: ${AppColors.white};
    }
  }
`
