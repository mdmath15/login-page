import styled from 'styled-components'

export const LoginContainer = styled.div`
  background: var(--brown);
  background-image: url('background.png');
  background-repeat: no-repeat;
  background-position: right center;
  display: flex;
  align-items: center;

  @media (max-width: 1250px) {
    background-size: 95%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 5rem 4rem 4rem;
    border-radius: 0.5rem;

    width: 100%;
    max-width: 460px;
    margin-left: -124px;
    height: 520px;
    background: #fff;

    @media (max-width: 1150px) {
      max-width: 420px;
      margin-left: -80px;

      height: 480px;
    }

    label {
      font-size: 1.8rem;
      color: var(--bege-escuro);

      @media (max-width: 1000px) {
        font-size: 1.5rem;
      }
    }

    input {
      border: none;
      border-bottom: 1.25px solid var(--brown);
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

    span {
      display: block;
      padding: 0.5rem 0;
      font-size: 0.85rem;
      color: var(--brown);

      a {
        text-decoration: underline;
        color: var(--brown);
      }
    }

    button {
      align-self: flex-start;
      font-size: 1rem;
      color: var(--bege-claro);
      background: var(--brown);
      border: 0;
      padding: 0 4rem;
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
