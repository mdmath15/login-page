import Image from 'next/image'
import useMedia from '../../hooks/useMedia'
import gcbMobileImg from '../../../public/gcb-mobile.svg'
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
              <Image src={gcbMobileImg} alt='GCB Logo' />
            </S.Logo>
          )}
          <h1>Olá, {user.name}</h1>

          <p>Seja bem vindo ao Grupo GCB Investimentos.</p>

          <p>Por favor confirme o email que enviamos para {user.email}</p>

          <button type='submit'>
            <a target='blank' href={`mailto:${user.email}`}>
              Abrir email
            </a>
          </button>
        </form>
      </S.ContainerWelcome>
    )
}

