import styled from 'styled-components'
import { AppColors } from '../../styles/global'

export const Container = styled.div`
  background: ${AppColors.brown};
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
    padding: 2rem 3rem;
    border-radius: 0.5rem;
    width: 100%;
    min-height: 520px;
    max-width: 460px;
    margin-left: -124px;
    background: ${AppColors.white};

    @media (max-width: 1150px) {
      max-width: 420px;
      margin-left: -80px;
    }

    @media (max-width: 900px) {
      background: none;
      margin: 0 auto;
      height: 620px;
      padding: 0 3rem;
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
