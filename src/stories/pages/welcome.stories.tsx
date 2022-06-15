import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import  Welcome from '../../pages/welcome/index'

export default {
  title: 'Pages/Home',
  component: Welcome,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Welcome>

export const WelcomePage: ComponentStory<typeof Welcome> = (args: any) => <Welcome {...args}  />