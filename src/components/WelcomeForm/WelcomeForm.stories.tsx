import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { WelcomeForm } from '.'

export default {
  title: 'Forms/WelcomeForm',
  component: WelcomeForm,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
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

export const MobileForm = Template.bind({})
MobileForm.args = {
  user: {
    name: 'Matheus',
    email: 'math@gmail.com'
  },
  mobile: true
}

MobileForm.parameters = {
  viewport: {
    defaultViewport: 'iphonex'
  }
}

