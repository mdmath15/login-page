import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent, useRef } from 'react'
import gcbMobileImg from '../../../public/gcb-mobile.svg'
import useMedia from '../../hooks/useMedia'
import * as S from './styles'

export function LoginForm() {
  const mobile = useMedia('(max-width: 900px)')
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const router = useRouter()

  const login = (e: FormEvent) => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem('user') || '{}')

    if (!user.email || !user.password) {
      return alert('Nenhum usuário cadastrado')
    }

    if (user.email !== emailRef.current?.value) {
      return alert('Usuário não cadastrado')
    }

    if (user.password !== passwordRef.current?.value) {
      return alert('Senha incorreta')
    }

    if (user.email === emailRef.current?.value && user.password === passwordRef.current?.value) {
      localStorage.setItem('token', 'logado')
      router.push('/welcome')
    }
  }

  return (
    <S.Container>
      <form onSubmit={login}>
        {mobile && (
          <div>
            <Image src={gcbMobileImg} alt='GCB Logo' />
          </div>
        )}
        <label htmlFor='email'>Email</label>
        <input ref={emailRef} type='email' id='email' name='email' placeholder='Email' />
        <label htmlFor='password'>Senha</label>
        <input
          ref={passwordRef}
          type='password'
          id='password'
          name='password'
          placeholder='Senha'
        />
        <span>
          Não tem cadastro?{' '}
          <Link href='/signup'>
            <a>Cadastre-se agora!</a>
          </Link>
        </span>
        <button type='submit'>Entrar</button>
      </form>
    </S.Container>
  )
}
