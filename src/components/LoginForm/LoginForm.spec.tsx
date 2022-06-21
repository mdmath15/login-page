import { render } from '@testing-library/react'
import { LoginForm } from '.'
import { useForm } from '../../hooks/useForm'

describe('LoginForm', () => {
  test('Label', () => {
    const { getByLabelText, getByText } = render(
      <LoginForm
        form={{ email: '', password: '' }}
        mobile={false}
        handleLogin={() => { }}
        handleInputChange={() => { }}
      />
    )

    expect(getByLabelText('Email')).toBeInTheDocument()
    expect(getByLabelText('Senha')).toBeInTheDocument()
  })
})
