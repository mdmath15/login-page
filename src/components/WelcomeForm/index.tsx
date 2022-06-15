import Image from 'next/image'
import useMedia from '../../hooks/useMedia'
import { AppColors } from '../../styles/global'
import { Button } from '../Button'
import * as S from './styles'

interface WelcomeFormProps {
    user: {
        name: string
        email: string
    }
}

export function WelcomeForm( {user} : WelcomeFormProps ) {
    const mobile = useMedia('(max-width: 900px)')
    return (
        <S.ContainerWelcome>
        <form>
          {mobile && (
            <S.Logo>
              <Image src='/gcb-mobile.svg' alt='GCB Logo' width={420} height={120} />
            </S.Logo>
          )}
          <h1>Olá, {user.name}</h1>

          <p>Seja bem vindo ao Grupo GCB Investimentos.</p>

          <p>Por favor confirme o email que enviamos para {user.email}</p>

          <Button type='submit' bgColor={AppColors.brown} color={AppColors.caramelo}>
            <a target='blank' href={`mailto:${user.email}`}>
              Abrir email
            </a>
          </Button>
        </form>
      </S.ContainerWelcome>
    )
}

