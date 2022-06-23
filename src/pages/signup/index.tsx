import { Content } from '../../components/Content'
import { SignUpForm } from '../../components/SignUpForm'
import { Layout } from '../../components/Layout'
import { FormEvent, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import useMedia from '../../hooks/useMedia'
import { useRouter } from 'next/router'
import { IdGenerator } from '../../utils/id-generator'
import { passwordValidator } from '../../utils/password-validator'
import { toast } from 'react-toastify'
import { useUser } from '../../hooks/useUser'

function SingUp() {
  const [errors, setErrors] = useState<string[]>([])
  const { users } = useUser()
  const { form, handleInputChange } = useForm({
    name: '',
    email: '',
    password: '',
    terms: false
  })
  const mobile = useMedia('(max-width: 900px)')
  const router = useRouter()

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault()

    const user = {
      id: IdGenerator(),
      name: form.name,
      email: form.email,
      password: form.password
    }

    const isValid = passwordValidator(user.password)

    if (!isValid.result) {
      setErrors(isValid.errors)
      return
    }

    localStorage.setItem('users', JSON.stringify([...users, user]))
    toast.success('Usuário cadastrado com sucesso!')
    router.push('/')
  }

  return (
    <Layout title='GCB - Cadastre-se' description='Página de cadastro'>
      <Content />
      <SignUpForm
        errors={errors}
        mobile={mobile!}
        handleSignUp={handleSignUp}
        form={form}
        handleInputChange={handleInputChange}
      />
    </Layout>
  )
}

export default SingUp
