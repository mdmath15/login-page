import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import  SignUp from '../../pages/signup/index'

export default {
  title: 'Pages/Home',
  component: SignUp,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof SignUp>

export const SignUpPage: ComponentStory<typeof SignUp> = (args: any) => <SignUp {...args}  />
