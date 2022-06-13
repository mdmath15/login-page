import Image from 'next/image'
import { useEffect, useState } from 'react'
import useMedia from '../../hooks/useMedia'
import gcbMobileImg from '../../../public/gcb-mobile.svg'
import gcbDesktopImg from '../../../public/gcb-desktop.svg'
import * as S from './styles'
import { useRouter } from 'next/router'

interface User {
  name: string
  email: string
}

export default function Welcome() {
  const mobile = useMedia('(max-width: 900px)')
  const router = useRouter()

  const [user, setUser] = useState<User>({} as User)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    setUser(user)
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/')
    }
  }, [router])

  return (
    <S.Container>
      <S.Content>
        <h1>
          Até onde conseguimos
          <br />
          chegar?
        </h1>

        <p>
          A <strong>curiosidade</strong> de descobrir
          <br />
          essa resposta é o que <strong>nos</strong>
          <br />
          <strong>move</strong> no dia-a-dia
        </p>

        <div>
          <Image src={gcbDesktopImg} alt='GCB Logo' />
        </div>
      </S.Content>
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
    </S.Container>
  )
}
