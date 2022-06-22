import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import  GlobalStyle  from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <ToastContainer 
      autoClose={2000}
      />
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
