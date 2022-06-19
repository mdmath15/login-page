import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LoginForm } from '.'

export default {
  title: 'Forms/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />

export const Forms = Template.bind({})
