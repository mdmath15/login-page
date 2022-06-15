import styled from "styled-components"

export const ContainerWelcome = styled.section`
  background: var(--brown);
  background-image: url('background.png');
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 50vh;
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 900px) {
    background-position: right center;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4rem;
    border-radius: 0.5rem;
    min-height: 464px;
    width: 100%;
    max-width: 460px;
    margin-left: -124px;
    background: #fff;

    @media (max-width: 1150px) {
      max-width: 420px;
      margin-left: -80px;
    }

    @media (max-width: 900px) {
      max-width: 460px;
      gap: 4rem;
      margin: 0 auto;
      background: none;
      height: auto;
      justify-content: center;
    }

    h1 {
      font-size: 2.5rem;
      color: var(--bege-escuro);

      @media (max-width: 900px) {
        color: var(--bege-claro);
      }
    }

    p {
      font-size: 1rem;
      color: var(--brown);

      @media (max-width: 900px) {
        color: #fff;
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

      a {
        color: var(--bege-claro);
        text-decoration: none;
      }

      @media (max-width: 900px) {
        color: var(--bege-escuro);
        background: #fff;
        margin: 0 auto;
        margin-top: 2rem;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`

export const Logo = styled.div`
  align-self: center;
`
