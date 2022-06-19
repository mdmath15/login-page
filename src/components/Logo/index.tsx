import Image from 'next/image'
import * as S from './styles'

export interface LogoProps {
  src: string
  alt: string
  width?: number
  height?: number
  layout?: 'fill' | 'raw' | 'fixed' | 'intrinsic'
  position?: 'relative' 
}

export function Logo({ src, alt, width, height, layout, position }: LogoProps) {
  return (
    <S.Container position={position}>
      <Image src={src} alt={alt} width={width} height={height} layout={layout} />
    </S.Container>
  )
}
