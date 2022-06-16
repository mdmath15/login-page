import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Content } from '../../components/Content'
import { WelcomeForm } from '../../components/WelcomeForm'
import Layout from '../../components/Layout'

interface User {
  name: string
  email: string
}

function Welcome() {
  const [user, setUser] = useState<User>({} as User)
  const router = useRouter()
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    setUser(user)

  }, [router])

  return (
    <Layout title='GCB - Bem-vindo' description='Página de bem vindo'>
      <Content/>
      <WelcomeForm user={user}/>
    </Layout>
  )
}

export default Welcome