import { Spinner } from 'phosphor-react'
import styled, { keyframes } from 'styled-components'
import { AppColors } from '../../styles/global'

export const Spin = keyframes`
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
`

export const Loading = styled(Spinner)`
  -webkit-animation: ${Spin} 1s linear infinite both;
  animation: ${Spin} 1s linear infinite both;
`

export const Container = styled.form`
  background-color: ${AppColors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem 3rem;
  border-radius: 0.5rem;
  min-height: 500px;
  width: 100%;
  max-width: 460px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  @media (max-width: 1150px) {
    max-width: 420px;
  }

  @media (max-width: 900px) {
    margin: 0 auto;
    background: none;
  }

  span {
    display: block;
    font-size: 1rem;
    padding: 0.5rem 0;
    margin-top: -2.5rem;
    color: ${AppColors.brown};

    @media (max-width: 900px) {
      color: ${AppColors.white};
      margin-top: 0;
      margin-bottom: 1rem;
    }

    a {
      text-decoration: underline;
      color: ${AppColors.brown};

      @media (max-width: 900px) {
        color: ${AppColors.white};
      }
    }
  }
`