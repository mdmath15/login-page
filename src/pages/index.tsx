import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Content } from '../components/Content'
import Layout from '../components/Layout'
import { LoginForm } from '../components/LoginForm'
import { tokenVerifier } from '../utils/authenticator'

function Home() {
  const router = useRouter()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')!)
    const token = localStorage.getItem('token')

    if (user && token) {
      const isValid = tokenVerifier(token)

      if (isValid?.id === user.id) {
        router.push('/welcome')
      }
    }
  }, [router])

  return (
    <Layout title='GCB - Login' description='Página de login'>
      <Content />
      <LoginForm />
    </Layout>
  )
}

export default Home
