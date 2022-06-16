import styled from "styled-components";

export const Container = styled.main`
  max-width: 100vw;
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