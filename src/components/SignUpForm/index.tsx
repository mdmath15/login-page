import Image from 'next/image'
import { useRouter } from 'next/router'
import { FormEvent, useRef, useState } from 'react'
import useMedia from '../../hooks/useMedia'
import { tokenGenerator } from '../../utils/authenticator'
import { IdGenerator } from '../../utils/id-generator'
import { passwordValidator } from '../../utils/password-validator'
import * as S from './styles'

export function SignUpForm() {
  const mobile = useMedia('(max-width: 900px)')
  const name = useRef<HTMLInputElement | null>(null)
  const email = useRef<HTMLInputElement | null>(null)
  const password = useRef<HTMLInputElement | null>(null)
  const terms = useRef<HTMLInputElement | null>(null)
  const [errors, setErrors] = useState<string[]>([])

  const router = useRouter()

  const signUp = (e: FormEvent) => {
    e.preventDefault()

    const user = {
      id: IdGenerator(),
      name: name.current?.value,
      email: email.current?.value,
      password: password.current?.value
    }

    const isValid = passwordValidator(user.password)

    if (!isValid.result) {
      setErrors(isValid.errors)
      return
    }

    const token = tokenGenerator(user.id)

    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    router.push('/')
  }

  return (
    <S.Container>
      <form onSubmit={signUp}>
        {mobile && (
          <div>
            <Image src='/gcb-mobile.svg' alt='GCB Logo' width={420} height={120} />
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
        <S.Errors>
          {errors && errors.map((error, index) => <span key={index}>{error}</span>)}
        </S.Errors>
        <div>
          <input ref={terms} type='checkbox' id='terms' name='terms' required />
          <label htmlFor='terms'>Eu li e aceito os Termos e Condições</label>
        </div>
        <button type='submit'>Entrar</button>
      </form>
    </S.Container>
  )
}

