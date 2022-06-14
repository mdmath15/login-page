import Head from 'next/head'
import { Content } from '../../components/Content'
import { Container } from '../../styles/styles'
import {SignUpForm} from '../../components/SignUpForm'

function SingUp() {
  return (
    <>
      <Head>
        <title>GCB - Login</title>
        <meta name='description' content='GCB Investimentos - Cadastre-se' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container>
        <Content/>
        <SignUpForm />
      </Container>
    </>
  )
}

export default SingUp
