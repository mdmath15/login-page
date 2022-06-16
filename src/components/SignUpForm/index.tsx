import Image from 'next/image'
import { useRouter } from 'next/router'
import { FormEvent, useRef, useState } from 'react'
import useMedia from '../../hooks/useMedia'
import { AppColors } from '../../styles/global'
import { tokenGenerator } from '../../utils/authenticator'
import { IdGenerator } from '../../utils/id-generator'
import { passwordValidator } from '../../utils/password-validator'
import { Button } from '../Button'
import Input from '../Input'
import Logo from '../Logo'
import * as S from './styles'

export function SignUpForm() {
  const mobile = useMedia('(max-width: 900px)')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [terms, setTerms] = useState<boolean>(false)
  const [errors, setErrors] = useState<string[]>([])
  const router = useRouter()

  const onChangeName = (e: FormEvent<HTMLInputElement>) => { 
    setName(e.currentTarget.value)
  }
  const onChangeEmail = (e: FormEvent<HTMLInputElement>) => { 
    setEmail(e.currentTarget.value)
  }
  const onChangePassword = (e: FormEvent<HTMLInputElement>) => { 
    setPassword(e.currentTarget.value)
  }
  const onChangeTerms = (e: FormEvent<HTMLInputElement>) => { 
    setTerms(e.currentTarget.checked)
  }


  const signUp = (e: FormEvent) => {
    e.preventDefault()

    const user = {
      id: IdGenerator(),
      name,
      email,
      password
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
        {mobile && <Logo src='/gcb-mobile.svg' alt='GCB Logo' width={420} height={120} />}
        <Input
          label='Seu Nome'
          htmlFor='name'
          value={name}
          onChange={onChangeName}
          type='text'
          id='name'
          name='name'
          placeholder='Nome'
          required
        />
        <Input
          label='Email'
          htmlFor='email'
          value={email}
          onChange={onChangeEmail}
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          required
        />
        <Input
          label='Senha'
          htmlFor='password'
          value={password}
          onChange={onChangePassword}
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
          <input checked={terms} onChange={onChangeTerms} type='checkbox' id='terms' name='terms' required />
          <label htmlFor='terms'>Eu li e aceito os Termos e Condições</label>
        </div>
        <Button type='submit' bgColor={AppColors.brown} color={AppColors.caramelo}>
          Entrar
        </Button>
      </form>
    </S.Container>
  )
}
