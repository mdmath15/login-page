import { Story, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Logo, LogoProps } from '.'

export default {
  title: 'Logos/Logo',
  component: Logo,
  argTypes: {
    position: { control: 'select', options: ['relative', 'initital'] },
    layout: { control: 'none' }
  },
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  }
} as ComponentMeta<typeof Logo>

const Template: Story<LogoProps> = (args) => <Logo {...args} />

export const Desktop = Template.bind({})
Desktop.args = {
  src: '/gcb-desktop.svg',
  alt: 'GCB Logo',
  height: 120,
  width: 420
}

export const Mobile = Template.bind({})
Mobile.args = {
  src: '/gcb-mobile.svg',
  alt: 'GCB Logo',
  height: 120,
  width: 420
}
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonexr'
  }
}
