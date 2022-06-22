import styled, { keyframes } from 'styled-components'
import { AppColors } from '../../styles/global'

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
  padding: 1rem 0 1rem;

  span {
    display: block;
    font-size: 0.85rem;
    color: red;
  }
`
