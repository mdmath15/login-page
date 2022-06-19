import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '.'

export default {
  title: 'Layouts/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args}>{args.children}</Layout>

export const Primary = Template.bind({})
Primary.parameters = {
  background: {
    defaultValue: [{ name: 'red', defaultValue: '#423B32' }]
  }
}
