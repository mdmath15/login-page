import styled from 'styled-components'
import { AppColors } from '../../styles/global'

export const ContainerWelcome = styled.section`
  background: var(--brown);
  background-image: url('background.png');
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (max-width: 900px) {
    align-items: center;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4rem;
    border-radius: 0.5rem;
    min-height: 464px;
    width: 100%;
    max-width: 460px;
    margin-left: -124px;
    background: #fff;

    @media (max-width: 1150px) {
      max-width: 420px;
      margin-left: -80px;
    }

    @media (max-width: 900px) {
      max-width: 460px;
      gap: 3rem;
      margin: 0 auto;
      background: none;
      justify-content: center;
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
  }
`

export const Logo = styled.div`
  align-self: center;
`
