import styled from 'styled-components'

export const Container = styled.div`
  background: var(--brown);
  background-image: url('background.png');
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 50vh;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    background-position: right center;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 4rem;
    border-radius: 0.5rem;
    width: 100%;
    min-height: 464px;
    max-width: 460px;
    margin-left: -124px;
    background: #fff;

    @media (max-width: 1150px) {
      max-width: 420px;
      margin-left: -80px;
      padding: 1rem 3rem;
    }

    @media (max-width: 900px) {
      background: none;
      margin: 0 1rem;
      height: auto;

      div {
        align-self: center;
      }
    }

    label {
      font-size: 1.8rem;
      color: var(--bege-escuro);

      @media (max-width: 1000px) {
        font-size: 1.5rem;
      }

      @media (max-width: 900px) {
        color: var(--bege-claro);
        margin: 0 auto;
        margin-top: 2rem;

        &:last-child {
          color: #fff;
          font-size: 1rem;
          padding: 0 0.5rem;
        }
      }
    }

    input {
      border: none;
      border-bottom: 1.25px solid var(--brown);
      padding: 0.5rem 0;
      outline: none;

      @media (max-width: 900px) {
        border-bottom: 1.25px solid #fff;
        background: none;
        color: #fff;
      }

      & + label {
        margin-top: 2rem;
      }

      &::placeholder {
        font-size: 1.2rem;
        font-weight: 500;
      }
    }

    div {
      margin-top: -0.5rem;

      @media (max-width: 900px) {
        margin-top: 0rem;
      }

      label {
        font-size: 1rem;
        margin-left: 0.25rem;

        @media (max-width: 900px) {
          margin-left: 0;
        }
      }
    }

    button {
      align-self: flex-start;
      font-size: 1rem;
      color: var(--bege-claro);
      background: var(--brown);
      border: 0;
      padding: 0 4rem;
      border-radius: 0.5rem;
      height: 3rem;
      transition: filter 0.2s;
      margin-top: 1rem;

      @media (max-width: 900px) {
        margin: 0 auto;
        margin-top: 2rem;
        color: var(--bege-escuro);
        background: #fff;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`

export const Errors = styled.div`
  margin: 0.5rem 0;

  span {
    display: block;
    font-size: 0.85rem;
    color: red;
  }
`
