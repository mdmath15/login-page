import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SignUpForm } from '.'

export default {
  title: 'Forms/SignUpForm',
  component: SignUpForm,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof SignUpForm>

const Template: ComponentStory<typeof SignUpForm> = () => <SignUpForm />

export const Form = Template.bind({})
Form.decorators = [
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
