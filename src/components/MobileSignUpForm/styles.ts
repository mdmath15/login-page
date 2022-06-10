import styled from 'styled-components'

export const RegisterContainer = styled.div`
  background: var(--brown);
  background-image: url('background.png');
  background-repeat: no-repeat;
  background-position: right;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 490px) {
    background-size: 95%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 1rem;
    padding: 5rem 4rem 4rem;
    border-radius: 0.5rem;
    width: 100%;
    max-width: 460px;
    min-height: 520px;
    margin: 0 1rem;

    @media (max-width: 490px) {
      padding: 5rem 2rem 2rem;
    }

    div {
      align-self: end;
    }

    label {
      font-size: 1.8rem;
      color: var(--bege-claro);
      margin: 0 auto;
      margin-top: 2rem;

      &:last-child {
        color: #fff;
        font-size: 1rem;
        padding: 1rem;
      }

      @media (max-width: 1000px) {
        font-size: 1.5rem;
      }
    }

    input {
      background: none;
      border: none;
      border-bottom: 1.25px solid #fff;
      padding: 0.5rem 0;
      outline: none;

      & + label {
        margin-top: 2rem;
      }

      &::placeholder {
        font-size: 1.2rem;
        font-weight: 500;
      }
    }

    button {
      align-self: flex-start;
      font-size: 1rem;
      color: var(--bege-escuro);
      background: #fff;
      border: 0;
      padding: 0 4rem;
      margin: 0 auto;
      margin-top: 2rem;
      border-radius: 0.5rem;
      height: 3rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`
