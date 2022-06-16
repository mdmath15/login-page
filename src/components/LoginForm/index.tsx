import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useMedia from '../../hooks/useMedia'
import { AppColors } from '../../styles/global'
import { tokenGenerator } from '../../utils/authenticator'
import { Button } from '../Button'
import Input from '../Input'
import Logo from '../Logo'
import * as S from './styles'

export function LoginForm() {
  const [loading, setLoading] = useState<null | boolean>()
  const mobile = useMedia('(max-width: 900px)')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setPassword(e.target.value)
  }

  const login = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)

    const user = JSON.parse(localStorage.getItem('user') || '{}')
    const input = {
      email,
      password
    }

    console.log(input.email)

    if (user.email !== input.email) {
      setTimeout(() => toast.error('Email incorreto'), 2000)
    }

    if (user.password !== input.password) {
      setTimeout(() => toast.error('Senha incorreta'), 2000)
    }

    if (user.email === input.email && user.password === input.password) {
      localStorage.setItem('token', tokenGenerator(user.id))
      setTimeout(() => toast.success('Login realizado com sucesso'), 2000)
      setTimeout(() => router.push('/welcome'), 2000)
    }
  }

  return (
    <S.Container>
        {mobile && <Logo src='/gcb-mobile.svg' alt='GCB Logo' width={420} height={120} />}
      <form onSubmit={login}>
        <Input
          label='Email'
          htmlFor='email'
          onChange={onChangeEmail}
          value={email}
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          required
        />
        <Input
          label='Senha'
          htmlFor='password'
          onChange={onChangePassword}
          value={password}
          type='password'
          id='password'
          name='password'
          placeholder='Senha'
          required
        />
        <span>
          Não tem cadastro?{' '}
          <Link href='/signup'>
            <a>Cadastre-se agora!</a>
          </Link>
        </span>
        <Button type='submit' bgColor={AppColors.brown} color={AppColors.begeEscuro}>
          {loading ? <S.Loading size={32} /> : 'Entrar'}
        </Button>
      </form>
    </S.Container>
  )
}
