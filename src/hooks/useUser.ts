import { useEffect, useState } from 'react'

export interface User {
  id: string
  name: string
  email: string
  password: string
}
export function useUser() {
  const [user, setUser] = useState<User>({} as User)
  const [users, setUsers] = useState<User[]>([] as User[])
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setToken(token)
    }

    const user = localStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }

    const users = localStorage.getItem('users')
    if (users) {
      setUsers(JSON.parse(users))
    }
  }, [])

  return { user, users, token }
}
