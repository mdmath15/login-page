import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { WelcomeForm } from '.'

export default {
  title: 'Forms/WelcomeForm',
  component: WelcomeForm,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof WelcomeForm>

const Template: ComponentStory<typeof WelcomeForm> = (args) => <WelcomeForm {...args} />

export const Form = Template.bind({})
Form.args = {
  user: {
    name: 'Matheus',
    email: 'math@gmail.com'
  }
}

Form.decorators = [
  (Story) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
        <Story />
      </div>
    )
  }
]
