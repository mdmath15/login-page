import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { SignUpForm } from '.'

export default {
  title: 'Forms/SignUpForm',
  component: SignUpForm,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  }
} as ComponentMeta<typeof SignUpForm>

const Template: ComponentStory<typeof SignUpForm> = (args) => <SignUpForm {...args} />

export const FormDesktop = Template.bind({})
FormDesktop.args = {
  errors: [],
  mobile: false,
  form: {
    name: '',
    email: '',
    password: '',
    terms: true
  },
  handleSignUp: () => {},
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
    defaultViewport: 'iphonex'
  }
}
FormMobile.args = {
  errors: [],
  mobile: true,
  form: {
    name: '',
    email: '',
    password: '',
    terms: true
  },
  handleSignUp: () => {},
  handleInputChange: () => {}
}
