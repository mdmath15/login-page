import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 3fr 2fr;

  @media (max-width: 1250px) {
    grid-template-columns: 2fr 1.5fr;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1.5fr 1.25fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const Content = styled.div`
  color: var(--brown);
  height: 100%;
  padding: 6rem 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 1250px) {
    padding: 6rem 3rem;
  }

  @media (max-width: 900px) {
    display: none;
  }

  h1 {
    font-size: 2.5rem;

    @media (max-width: 1000px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 2rem;

    @media (max-width: 1000px) {
      font-size: 1.5rem;
    }
  }

  div {
    max-width: 320px;
    position: relative;
    top: 64px;

    @media (max-width: 1000px) {
      max-width: 280px;
    }
  }
`

export const ContainerWelcome = styled.section`
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
