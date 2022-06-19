import { Story, ComponentMeta } from '@storybook/react'
import { Input, InputProps } from '.'

export default {
  title: 'Inputs/Input',
  component: Input,
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'number'] }
  }
} as ComponentMeta<typeof Input>

const Template: Story<InputProps> = (args) => <Input {...args} />

export const InputText = Template.bind({})
InputText.args = {
  id: 'name',
  htmlFor: 'name',
  label: 'Seu Nome',
  name: 'name',
  value: '',
  placeholder: 'Digite seu nome',
  type: 'text',
  required: true
}
