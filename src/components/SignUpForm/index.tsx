import { AppColors } from '../../styles/global'
import { Button } from '../Button'
import { CheckBox } from '../CheckBox'
import { Input } from '../Input'
import {Logo} from '../Logo'
import * as S from './styles'

interface SignUpFormProps {
  errors: string[]
  mobile: boolean
  form: {
    name?: string
    email: string
    password: string
    terms?: boolean
  }
  handleSignUp: (e: React.FormEvent) => void
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function SignUpForm({ errors, mobile, form, handleSignUp, handleInputChange }: SignUpFormProps) {
  return (
      <S.Container onSubmit={handleSignUp} >
        {mobile && <Logo src='/gcb-mobile.svg' alt='GCB Logo' width={420} height={120} />}
        <Input
          label='Seu Nome'
          htmlFor='name'
          value={form.name!}
          onChange={handleInputChange}
          type='text'
          id='name'
          name='name'
          placeholder='Nome'
          required
        />
        <Input
          label='Email'
          htmlFor='email'
          value={form.email}
          onChange={handleInputChange}
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          required
        />
        <Input
          label='Senha'
          htmlFor='password'
          value={form.password}
          onChange={handleInputChange}
          type='password'
          id='password'
          name='password'
          placeholder='Senha'
          required
        />
        {errors.length > 0 && (
          <S.Errors>
            {errors.map((error, index) => (
              <span key={index}>{error}</span>
            ))}
          </S.Errors>
        )}
        <CheckBox
          id='terms'
          name='terms'
          type='checkbox'
          htmlFor='terms'
          required
          onChange={handleInputChange}
          checked={form.terms!}
        />
        <Button type='submit' bgColor={AppColors.brown} color={AppColors.begeEscuro}>
          Cadastrar
        </Button>
      </S.Container>
 
  )
}
