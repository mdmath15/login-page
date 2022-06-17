import * as S from './styles'

export interface InputProps {
  id: string
  name: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  htmlFor: string
  type: string
  required?: boolean
}

export function Input({
  name,
  placeholder,
  label,
  htmlFor,
  type,
  onChange,
  id,
  value,
  required
}: InputProps) {
  return (
    <S.Container>
      <S.Label htmlFor={htmlFor}>{label}</S.Label>
      <S.Input
        value={value}
        onChange={onChange}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </S.Container>
  )
}
