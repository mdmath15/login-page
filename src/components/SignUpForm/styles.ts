import styled, { keyframes } from 'styled-components'
import { AppColors } from '../../styles/global'

const bounce = keyframes`
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-35px);
            transform: translateY(-35px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-20px);
            transform: translateY(-20px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-5px);
            transform: translateY(-5px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
`

const visible = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20%);
  }
  100% {
    opacity: 1;
    transform:  translateX(0);
  }
`

export const Container = styled.form`
  animation: ${visible} 500ms ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 3rem;
  border-radius: 0.5rem;
  width: 100%;
  min-height: 500px;
  max-width: 460px;
  background: ${AppColors.white};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  button {
    margin-top: 1rem;
  }

  @media (max-width: 1150px) {
    max-width: 420px;
  }

  @media (max-width: 900px) {
    background: none;
    margin: 0 auto;
    min-height: 620px;
    box-shadow: none;
    animation: none;

    button {
      margin-top: 1rem;
    }
  }
`

export const Errors = styled.div`
  animation: ${bounce} 1.1s both;
  padding: 1rem 0 1rem;

  span {
    display: block;
    font-size: 0.85rem;
    color: red;
  }
`
