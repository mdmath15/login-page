import { Story, ComponentMeta } from '@storybook/react'
import { Button, ButtonProps } from '.'
import { AppColors } from '../../styles/global'

export default {
  title: 'Buttons/Button',
  component: Button
} as ComponentMeta<typeof Button>

export const Desktop: Story<ButtonProps> = (args) => <Button {...args}>My Button</Button>
Desktop.args = {
  bgColor: AppColors.brown,
  color: AppColors.begeEscuro,
  type: 'submit'
}

export const Mobile: Story<ButtonProps> = (args) => <Button {...args}>My Button</Button>
Mobile.args = {
  color: AppColors.brown,
  bgColor: AppColors.white,
  type: 'submit'
}
