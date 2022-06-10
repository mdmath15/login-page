import Head from 'next/head'
import Image from 'next/image'
import gcbDesktopImg from '../../public/gcb-desktop.svg'
import { LoginForm } from '../components/LoginForm'
import MobileLoginForm from '../components/MobileLoginForm'
import useMedia from '../hooks/useMedia'
import * as S from '../styles/styles'

function Home() {
  const mobile = useMedia('(max-width: 900px)')
  return (
    <>
      <Head>
        <title>GCB - Login</title>
        <meta name='description' content='GCB Investimentos - Login' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <S.Container>
        <S.Content>
          <h1>
            Até onde conseguimos
            <br />
            chegar?
          </h1>

          <p>
            A <strong>curiosidade</strong> de descobrir
            <br />
            essa resposta é o que <strong>nos</strong>
            <br />
            <strong>move</strong> no dia-a-dia
          </p>

          <div>
            <Image src={gcbDesktopImg} alt='GCB Logo' />
          </div>
        </S.Content>

        <LoginForm />
      </S.Container>
    </>
  )
}

export default Home
