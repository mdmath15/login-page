import Link from 'next/link'
import * as S from './styles'

export function LoginForm() {
  return (
    <S.LoginContainer>
      <form>
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
