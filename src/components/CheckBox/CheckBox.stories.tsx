import { Story, ComponentMeta } from '@storybook/react'
import { CheckBox, CheckBoxProps } from '.'

export default {
  title: 'Inputs/CheckBox',
  component: CheckBox,
  argTypes: {
    checked: {
      control: 'boolean'
    }
  }
} as ComponentMeta<typeof CheckBox>

const Template: Story<CheckBoxProps> = (args) => <CheckBox {...args} />

export const InputCheckBox = Template.bind({})
InputCheckBox.args = {
  id: 'terms',
  htmlFor: 'terms',
  name: 'terms',
  checked: false,
  type: 'checkbox',
  required: true,
  onChange: (e) => {}
}
