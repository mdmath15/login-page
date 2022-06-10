import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import gcbMobileImg from '../../../public/gcb-mobile.svg'
import useMedia from '../../hooks/useMedia'
import * as S from './styles'

export default function SignUpForm() {
  const mobile = useMedia('(max-width: 900px)')
  const name = useRef<HTMLInputElement | null>(null)
  const email = useRef<HTMLInputElement | null>(null)
  const password = useRef<HTMLInputElement | null>(null)
  const terms = useRef<HTMLInputElement | null>(null)

  const router = useRouter()

  const signUp = (e: any) => {
    e.preventDefault()
    const user = {
      name: name.current?.value,
      email: email.current?.value,
      password: password.current?.value
    }

    if (!user.name || !user.email || !user.password || !terms.current?.checked) {
      return alert('Preencha todos os campos')
    }

    localStorage.setItem('user', JSON.stringify(user))
    router.push('/')
  }

  return (
    <S.RegisterContainer>
      <form onSubmit={signUp}>
        {mobile && (
          <div>
            <Image src={gcbMobileImg} alt='GCB Logo' />
          </div>
        )}
        <label htmlFor='name'>Seu Nome</label>
        <input ref={name} type='text' id='name' name='name' placeholder='Nome' required />
        <label htmlFor='email'>Email</label>
        <input ref={email} type='email' id='email' name='email' placeholder='Email' required />
        <label htmlFor='password'>Senha</label>
        <input
          ref={password}
          type='password'
          id='password'
          name='password'
          placeholder='Senha'
          required
        />
        <div>
          <input ref={terms} type='checkbox' id='terms' name='terms' />
          <label htmlFor='terms'>Eu li e aceito os Termos e Condições</label>
        </div>

        <button type='submit'>Entrar</button>
      </form>
    </S.RegisterContainer>
  )
}
