import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { FormEvent, useEffect, useState } from 'react'
import { Content } from '../components/Content'
import { Layout } from '../components/Layout'
import { LoginForm } from '../components/LoginForm'
import { useForm } from '../hooks/useForm'
import useMedia from '../hooks/useMedia'
import { tokenGenerator, tokenVerifier } from '../utils/authenticator'

function Home() {
  const [loading, setLoading] = useState<boolean>(false)
  const { form, handleInputChange } = useForm({ password: '', email: '' })
  const mobile = useMedia('(max-width: 900px)')
  const router = useRouter()

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)

    const users = JSON.parse(localStorage.getItem('users') || '[]')

    const user = users.find(
      (user: any) => user.email === form.email && user.password === form.password
    )

    if (!user) {
      return setTimeout(() => toast.error('Dados incorretos'), 2000)
    }

    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', tokenGenerator(user.id))
    setTimeout(() => toast.success('Login realizado com sucesso'), 2000)
    setTimeout(() => router.push('/welcome'), 2000)
  }

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
      <LoginForm
        loading={loading}
        mobile={mobile!}
        handleLogin={handleLogin}
        handleInputChange={handleInputChange}
        form={form}
      />
    </Layout>
  )
}

export default Home
