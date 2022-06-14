import { Spinner } from "phosphor-react";
import styled, { keyframes } from "styled-components";

export const Spin = keyframes`
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
`;

export const Loading = styled(Spinner)`
  -webkit-animation: ${Spin} 1s linear infinite both;
	        animation: ${Spin} 1s linear infinite both;
`;

export const Container = styled.div`
  background: var(--brown);
  background-image: url("background.png");
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
      gap: 1rem;
      max-width: 460px;
      height: auto;
      margin: 0 1rem;
      background: none;

      div {
        align-self: center;
      }
    }

    @media (max-width: 490px) {
      padding: 5rem 2rem 2rem;
    }

    label {
      font-size: 1.8rem;
      color: var(--bege-escuro);

      @media (max-width: 1000px) {
        font-size: 1.5rem;
      }

      @media (max-width: 900px) {
        margin: 0 auto;
        margin-top: 2rem;
        color: var(--bege-claro);
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

    span {
      display: block;
      padding: 0.5rem 0;
      font-size: 1rem;
      color: var(--brown);

      @media (max-width: 900px) {
        color: #fff;
      }

      a {
        text-decoration: underline;
        color: var(--brown);

        @media (max-width: 900px) {
          color: #fff;
        }
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
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
`;
