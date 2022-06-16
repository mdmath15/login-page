import styled from 'styled-components'

interface ContainerProps { 
  position?: 'relative'
}

export const Container = styled.div<ContainerProps>`
  position: ${props => props.position || 'initial'} ;
  top: 64px;

  
  @media (max-width: 1000px) {
    max-width: 340px;
  }
`
