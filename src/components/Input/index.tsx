import * as S from './styles'
interface InputProps {
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

export default function Input({
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
    <>
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
    </>
  )
}
