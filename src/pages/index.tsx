import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Content } from '../components/Content'
import {LoginForm} from '../components/LoginForm'
import * as S from '../styles/styles'

function Home() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      router.push('/welcome')
    }
  }, [router])

  return (
    <>
      <Head>
        <title>GCB - Login</title>
        <meta name='description' content='GCB Investimentos - Login' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <S.Container>
        <Content/>
        <LoginForm />
      </S.Container>
    </>
  )
}

export default Home