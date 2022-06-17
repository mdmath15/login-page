import { Story, ComponentMeta } from '@storybook/react'
import { CheckBox, CheckBoxProps } from '.'

export default {
  title: 'Inputs/CheckBox',
  component: CheckBox
} as ComponentMeta<typeof CheckBox>

export const InputCheckBox: Story<CheckBoxProps> = (args) => <CheckBox {...args} />
InputCheckBox.args = {
  id: 'terms',
  htmlFor: 'terms',
  name: 'terms',
  checked: false,
  type: 'checkbox',
  required: true,
  onChange(e) {
    console.log(e.target.checked)
  },
}
