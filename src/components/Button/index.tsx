import * as S from './styles'

interface ButtonProps {
    children: React.ReactNode;
    type?: 'submit' | 'button'
}

export function Button( { children, type = 'button' }: ButtonProps ) {
    return (
        <S.Container type={type}>
            {children}
        </S.Container>
    )
}