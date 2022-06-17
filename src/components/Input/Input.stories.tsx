import { Story, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input, InputProps } from '.'

export default {
  title: 'Inputs/Input',
  component: Input
} as ComponentMeta<typeof Input>

export const InputText: Story<InputProps> = (args) => <Input {...args} />
InputText.args = {
  id: 'name',
  htmlFor: 'name',
  label: 'Seu Nome',
  name: 'name',
  value: '',
  placeholder: 'Digite seu nome',
  type: 'text',
  required: true,
}
