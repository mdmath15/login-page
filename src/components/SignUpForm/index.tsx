import * as S from './styles'

export default function SignUpForm() {
  return (
    <S.RegisterContainer>
      <form>
        <label htmlFor='name'>Seu Nome</label>
        <input type='text' id='name' placeholder='Nome' />
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' placeholder='Email' />
        <label htmlFor='password'>Senha</label>
        <input type='email' id='email' placeholder='Senha' />
        <div>
          <input type='checkbox' id='terms' name='terms' />
          <label htmlFor='terms'>Eu li e aceito os Termos e Condições</label>
        </div>

        <button type='submit'>Entrar</button>
      </form>
    </S.RegisterContainer>
  )
}
