import styled from 'styled-components'

export const Container = styled.div`
  background: var(--brown);
  background-image: url('background.png');
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 3rem;
    border-radius: 0.5rem;
    width: 100%;
    min-height: 464px;
    max-width: 460px;
    margin-left: -124px;
    background: #fff;

    @media (max-width: 1150px) {
      max-width: 420px;
      margin-left: -80px;
    }

    @media (max-width: 900px) {
      background: none;
      margin: 0 auto;
      height: 600px;
    }

    div {
      display: flex;
      align-items: center;
      margin-top: -1rem;

      @media (max-width: 900px) {
        margin-top: 0;
        margin-bottom: 1rem;
      }

      label {
        font-size: 1rem;
        margin-left: 0.25rem;
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
