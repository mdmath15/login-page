import styled from 'styled-components'

export const Label = styled.label`
  font-size: 1.8rem;
  color: var(--bege-escuro);
  padding: 0.5rem 0;

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }

  @media (max-width: 900px) {
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--bege-claro);
  }
`

export const Input = styled.input`
  border: none;
  border-bottom: 1.25px solid var(--brown);
  outline: none;
  padding: 0.25rem 0;

  @media (max-width: 900px) {
    border-bottom: 1.25px solid #fff;
    background: none;
    color: #fff;
  }

  &::placeholder {
    font-size: 1.2rem;
    font-weight: 500;
  }
`
