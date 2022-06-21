import Link from 'next/link'
import { AppColors } from '../../styles/global'
import { Button } from '../Button'
import { Input } from '../Input'
import { Logo } from '../Logo'
import * as S from './styles'

interface LoginFormProps { 
  loading?: boolean
  mobile?: boolean
  form: {
    email: string
    password: string
  }
  handleLogin: (e: React.FormEvent) => void
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function LoginForm({ loading, mobile, form, handleLogin, handleInputChange }: LoginFormProps) {
  return (
    <S.Container onSubmit={handleLogin}>
      {mobile && <Logo src='/gcb-mobile.svg' alt='GCB Logo' width={420} height={120} />}
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
    </S.Container>
  )
}
