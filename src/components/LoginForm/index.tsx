import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Form, useForm } from '../../hooks/useForm'
import useMedia from '../../hooks/useMedia'
import { AppColors } from '../../styles/global'
import { tokenGenerator } from '../../utils/authenticator'
import { Button } from '../Button'
import { Input } from '../Input'
import Logo from '../Logo'
import * as S from './styles'

export function LoginForm() {
  const [loading, setLoading] = useState<null | boolean>()
  const { form, handleInputChange } = useForm({ password: '', email: '' } as Form)
  const mobile = useMedia('(max-width: 900px)')
  const router = useRouter()

  const login = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)

    const users = JSON.parse(localStorage.getItem('users') || '[]')

    const user = users.find(
      (user: any) => user.email === form.email && user.password === form.password
    )

    if (!user) {
      setTimeout(() => toast.error('Dados incorretos'), 2000)
    }

    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
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
          onChange={handleInputChange}
          value={form.email}
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          required
        />
        <Input
          label='Senha'
          htmlFor='password'
          onChange={handleInputChange}
          value={form.password}
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
