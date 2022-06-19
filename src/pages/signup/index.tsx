import { Content } from '../../components/Content'
import { SignUpForm } from '../../components/SignUpForm'
import { Layout } from '../../components/Layout'

function SingUp() {
  return (
    <Layout title='GCB - Cadastre-se' description='Página de cadastro'>
      <Content />
      <SignUpForm />
    </Layout>
  )
}

export default SingUp
