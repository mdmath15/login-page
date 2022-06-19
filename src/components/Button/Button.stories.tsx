import { Story, ComponentMeta } from '@storybook/react'
import { Button, ButtonProps } from '.'
import { AppColors } from '../../styles/global'

export default {
  title: 'Buttons/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: Story<ButtonProps> = (args) => <Button {...args}>My Button</Button>

export const Desktop = Template.bind({})
Desktop.args = {
  bgColor: AppColors.brown,
  color: AppColors.begeEscuro,
  type: 'submit',
}

export const Mobile = Template.bind({})
Mobile.args = {
  color: AppColors.brown,
  bgColor: AppColors.white,
  type: 'submit'
}
