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
  handleLogout: () => void
  mobile: boolean
}

export function WelcomeForm({ user, handleLogout, mobile }: WelcomeFormProps) {
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
      <Button type='submit' bgColor={AppColors.brown} color={AppColors.begeEscuro} logout={handleLogout}>
        Logout
      </Button>
    </S.Container>
  )
}
