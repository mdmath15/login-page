import Image from 'next/image'
import { useRouter } from 'next/router'
import useMedia from '../../hooks/useMedia'
import { AppColors } from '../../styles/global'
import { Button } from '../Button'
import { Logo } from '../Logo'
import * as S from './styles'

interface WelcomeFormProps {
  user: {
    name: string
    email: string
  }
}

export function WelcomeForm({ user }: WelcomeFormProps) {
  const mobile = useMedia('(max-width: 900px)')
  const router = useRouter()

  const logout = (): void => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    router.push('/')
  }

  return (
    <S.Container>
      {mobile && <Logo src='/gcb-mobile.svg' alt='GCB Logo' width={420} height={120} />}

      <h1>Olá, {user.name}</h1>

      <p>Seja bem vindo ao Grupo GCB Investimentos.</p>

      <p>Por favor confirme o email que enviamos para {user.email}</p>

      <Button type='submit' bgColor={AppColors.brown} color={AppColors.begeEscuro}>
        <a target='blank' href={`mailto:${user.email}`}>
          Abrir email
        </a>
      </Button>
      <Button type='submit' bgColor={AppColors.brown} color={AppColors.begeEscuro} logout={logout}>
        Logout
      </Button>
    </S.Container>
  )
}
