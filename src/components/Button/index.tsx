import * as S from './styles'

export interface ButtonProps {
  type?: 'button' | 'submit' 
  children: React.ReactNode
  bgColor?: string
  color?: string
  logout?: () => void
}

export function Button({ children, bgColor, color, type, logout }: ButtonProps) {
  return (
    <S.Container bgColor={bgColor} color={color} type={type} onClick={logout}>
      {children}
    </S.Container>
  )
}
