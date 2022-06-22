import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { LoginForm } from '.'

export default {
  title: 'Forms/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  }
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const FormDesktop = Template.bind({})
FormDesktop.args = {
  loading: false,
  mobile: false,
  form: {
    email: '',
    password: ''
  },
  handleLogin: () => {},
  handleInputChange: () => {}
}
FormDesktop.decorators = [
  (Story) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '1rem',
          height: '100vh',
          alignItems: 'center'
        }}>
        <Story />
      </div>
    )
  }
]

export const FormMobile = Template.bind({})
FormMobile.parameters = {
  viewport: {
    defaultViewport: 'iphonexr'
  }
}

FormMobile.args = {
  loading: false,
  mobile: true,
  form: {
    email: '',
    password: ''
  },
  handleLogin: () => {},
  handleInputChange: () => {}
}

