import styled from 'styled-components'
import { AppColors } from '../../styles/global'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Label = styled.label`
  font-size: 1.8rem;
  color: ${AppColors.caramelo};
  padding: 0.5rem 0;

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }

  @media (max-width: 900px) {
    margin: 0 auto;
    margin-top: 2rem;
    color: ${AppColors.begeEscuro};
  }
`

export const Input = styled.input`
  border: none;
  border-bottom: 1.25px solid ${AppColors.brown};
  outline: none;
  padding: 0.25rem 0;
  background-color: transparent;

  @media (max-width: 900px) {
    border-bottom: 1.25px solid ${AppColors.white};
    background: none;
    color: ${AppColors.white};
  }

  &::placeholder {
    font-size: 1.2rem;
    font-weight: 500;
  }
`
