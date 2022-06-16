import { Spinner } from 'phosphor-react'
import styled, { keyframes } from 'styled-components'

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

export const Container = styled.div`
  background: var(--brown);
  background-image: url('background.png');
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4rem 3rem;
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
      margin: 0 auto;
      background: none;
    }

    span {
      display: block;
      font-size: 1rem;
      color: var(--brown);
      margin-top: -1rem;

      @media (max-width: 900px) {
        color: #fff;
        margin-top: 0;
      }

      a {
        text-decoration: underline;
        color: var(--brown);

        @media (max-width: 900px) {
          color: #fff;
        }
      }
    }
  }
`
