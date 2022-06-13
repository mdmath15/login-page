import Head from 'next/head'
import Image from 'next/image'
import gcbDesktopImg from '../../../public/gcb-desktop.svg'
import SignUpForm from '../../components/SignUpForm'
import * as S from './styles'

function SingUp() {
  return (
    <>
      <Head>
        <title>GCB - Login</title>
        <meta name='description' content='GCB Investimentos - Cadastre-se' />
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

        <SignUpForm />
      </S.Container>
    </>
  )
}

export default SingUp
