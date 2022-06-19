import { createGlobalStyle } from 'styled-components'

export const AppColors = {
  bege: '#FFEBD6',
  caramelo: '#8B6B4A',
  begeEscuro: '#F5CA9C',
  brown: '#423B32',
  white: '#fff'
}

const GlobalStyle = createGlobalStyle`
    :root {
        --bege: #FFEBD6;
        --bege-escuro: #8B6B4A;
        --bege-claro: #F5CA9C;
        --brown: #423B32;
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        
        @media (max-width: 1150px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
       
        background: linear-gradient(90deg, rgba(255,235,214,1) 60%, rgba(66,59,50,1) 60%);
        -webkit-font-smoothing: antialiased; 

        @media (max-width: 900px) {
            background: var(--brown);
        }
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }

    p {
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button  {
        cursor: pointer; 
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    [disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }
`

export default GlobalStyle
