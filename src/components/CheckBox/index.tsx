import * as S from './styles'

interface CheckBoxProps {
  id: string
  name: string

  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  htmlFor: string
  type: string
  required?: boolean
}

export function CheckBox({ id, name, checked, onChange, htmlFor, type, required }: CheckBoxProps) {
  return (
    <S.Container>
      <input
        id={id}
        name={name}
        type={type}
        checked={checked}
        onChange={onChange}
        required={required}
      />
      <label htmlFor={htmlFor}>
        Eu Li e aceito os <span>Termos e Condições</span>
      </label>
    </S.Container>
  )
}
