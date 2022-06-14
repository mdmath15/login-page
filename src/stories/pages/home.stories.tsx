import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import  Home  from '../../pages/index'

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Home>

export const HomePage: ComponentStory<typeof Home> = (args: any) => <Home {...args}  />


