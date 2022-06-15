import * as S from './styles'

export interface ButtonProps {
    type?: 'button' | 'submit' | 'reset'
    children: React.ReactNode
    bgColor?: string
    color?: string
}

export function Button( { children, bgColor, color, type}: ButtonProps ) {
    return (
        <S.Container bgColor={bgColor} color={color} type={type}>
            {children}
        </S.Container>
    )
}