import { Story, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { CheckBox, CheckBoxProps } from '.'

export default {
  title: 'Inputs/CheckBox',
  component: CheckBox,
  argTypes: {
    checked: {
      control: 'boolean'
    }
  },
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS
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

export const InputCheckBoxMobile = Template.bind({})
InputCheckBoxMobile.args = {
  id: 'terms',
  htmlFor: 'terms',
  name: 'terms',
  checked: false,
  type: 'checkbox',
  required: true,
  onChange: (e) => {}
}
InputCheckBoxMobile.parameters = {
  viewport: {
    defaultViewport: 'iphonexr'
  }
}