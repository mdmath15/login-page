import * as NextImage from 'next/image'
import GlobalStyle from '../src/styles/global'
import { RouterContext } from "next/dist/shared/lib/router-context"; // next 12

 export const decorators = [
   Story => (
    <>
      <GlobalStyle />
       <Story />
     </>
   ),
];

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
    />
  )
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
}
