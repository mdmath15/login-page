import styled from 'styled-components'
import { AppColors } from '../../styles/global'

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 360px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  label {
    font-size: 1rem;
    margin-left: 0.25rem;
    color: ${AppColors.brown};

    @media (max-width: 900px) {
      color: ${AppColors.white};
    }

    span {
      text-decoration: underline;
      font-weight: 600;
      cursor: pointer;
    }
  }

  input[type='checkbox'] {
    background-color: ${AppColors.brown};
    cursor: pointer;
  }

  
`
