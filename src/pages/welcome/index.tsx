import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Container } from '../../styles/styles'
import { Content } from '../../components/Content'
import { WelcomeForm } from '../../components/WelcomeForm'

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
  }, [])

  // useEffect(() => {
  //   const token = localStorage.getItem('token')!
  //   if (!token) {
  //     router.push('/')
  //   }
  // }, [router])

  return (
    <Container>
      <Content/>
      <WelcomeForm user={user}/>
    </Container>
  )
}

export default Welcome