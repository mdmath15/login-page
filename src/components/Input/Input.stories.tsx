import { Story, ComponentMeta } from '@storybook/react'
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
  onChange(e) {
    console.log(e.target.value)
  }
}
