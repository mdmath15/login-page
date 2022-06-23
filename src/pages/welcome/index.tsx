import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Content } from '../../components/Content'
import { WelcomeForm } from '../../components/WelcomeForm'
import { Layout } from '../../components/Layout'
import { Authentication } from '../../utils/authenticator'
import useMedia from '../../hooks/useMedia'
import { useUser } from '../../hooks/useUser'

function Welcome() {
  const { user, token } = useUser()
  const mobile = useMedia('(max-width: 900px)')
  const router = useRouter()

  const handleLogout = (): void => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    router.push('/')
  }

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (!token) {
  //     router.push('/')
  //   }
  //   if (user && token) {
  //     const isValid = Authentication.tokenVerifier(token)

  //     if (isValid?.id !== user.id) {
  //       router.push('/')
  //     }
  //   }
  // }, [user, token, router])
  useEffect(() => {
    if (!token) {
      router.push('/')
    }
    if (user && token) {
      const isValid = Authentication.tokenVerifier(token)

      if (isValid?.id !== user.id) {
        router.push('/')
      }
    }
  }, [router, user, token])

  return (
    <Layout title='GCB - Bem-vindo' description='Página de bem vindo'>
      <Content />
      <WelcomeForm user={user} handleLogout={handleLogout} mobile={mobile!} />
    </Layout>
  )
}

export default Welcome
