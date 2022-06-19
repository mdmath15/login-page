import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SignUpForm } from '.'

export default {
  title: 'Forms/SignUpForm',
    component: SignUpForm,
    parameters: {
        layout: 'fullscreen',
    }
} as ComponentMeta<typeof SignUpForm>

const Template: ComponentStory<typeof SignUpForm> = () => <SignUpForm />

export const Form = Template.bind({})
