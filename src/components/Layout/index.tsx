import Head from 'next/head'
import React from 'react'
import * as S from './styles'

interface LayoutProps {
  children: React.ReactNode
  title: string
  description: string
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <S.Container>{children}</S.Container>
    </>
  )
}
