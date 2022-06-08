import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 3fr 2fr;
`

export const Content = styled.div`
  color: var(--brown);
  height: 100%;
  padding: 6rem 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 1320px) {
    padding: 6rem 4rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 2rem;
  }

  div {
    position: relative;
    top: 64px;
  }
`

export const LoginContainer = styled.div`
  background: var(--brown);
  background-image: url('background.png');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: right center;
  display: flex;
  align-items: center;

  @media (max-width: 1440px) {
    background-size: 80%;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 5rem 4rem 4rem;
    border-radius: 0.5rem;

    width: 100%;
    max-width: 480px;
    margin-left: -124px;
    height: 520px;
    background: #fff;

    label {
      font-size: 1.8rem;
      color: var(--bege-escuro);
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
