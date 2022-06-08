import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import gcbDesktopImg from '../../public/gcb-desktop.svg'
import touroDesktopImg from '../../public/touro-desktop.svg'
import * as S from '../styles/styles'

function Home() {
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

        <S.LoginContainer>
          <form>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Email' />
            <label htmlFor='password'>Senha</label>
            <input type='email' id='email' placeholder='Senha' />
            <span>
              Não tem cadastro?
              <Link href='/'>
                <a>Cadastre-se agora!</a>
              </Link>
            </span>
            <button type='submit'>Entrar</button>
          </form>
        </S.LoginContainer>
      </S.Container>
    </>
  )
}

export default Home
