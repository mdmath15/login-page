import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Content } from '../../components/Content'
import { WelcomeForm } from '../../components/WelcomeForm'
import {Layout} from '../../components/Layout'
import { tokenVerifier } from '../../utils/authenticator'

interface User {
  name: string
  email: string
}

function Welcome() {
  const [user, setUser] = useState<User>({} as User)
  const router = useRouter()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    const token = localStorage.getItem('token')

    if (!token) {
      router.push('/')
    }

    if (user && token) {
      const isValid = tokenVerifier(token)

      if (isValid?.id !== user.id) {
        router.push('/')
      }
    }

    setUser(user)
  }, [router])

  return (
    <Layout title='GCB - Bem-vindo' description='Página de bem vindo'>
      <Content />
      <WelcomeForm user={user} />
    </Layout>
  )
}

export default Welcome
