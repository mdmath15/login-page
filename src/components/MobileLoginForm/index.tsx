import Image from 'next/image'
import Link from 'next/link'
import gcbMobileImg from '../../../public/gcb-mobile.svg'
import * as S from './styles'

export default function MobileLoginForm() {
  return (
    <S.LoginContainer>
      <form>
        <div>
          <Image src={gcbMobileImg} alt='GCB Logo' />
        </div>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' placeholder='Email' />
        <label htmlFor='password'>Senha</label>
        <input type='email' id='email' placeholder='Senha' />
        <span>
          Não tem cadastro?{' '}
          <Link href='/signup'>
            <a>Cadastre-se agora!</a>
          </Link>
        </span>
        <button type='submit'>Entrar</button>
      </form>
    </S.LoginContainer>
  )
}
