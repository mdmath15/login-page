import { Story, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Input, InputProps } from '.'

export default {
  title: 'Inputs/Input',
  component: Input,
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'number'] }
  },
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
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
  required: true,
  onChange: (e) => {}
}

export const InputTextMobile = Template.bind({})
InputTextMobile.decorators= [
  (Story) => {
    return (
      <div style={{padding: "0 2rem"}}>
        <Story />
      </div>
    )
  }
]

InputTextMobile.args = {
  id: 'name',
  htmlFor: 'name',
  label: 'Seu Nome',
  name: 'name',
  value: '',
  placeholder: 'Digite seu nome',
  type: 'text',
  required: true,
  onChange: (e) => {}
}

InputTextMobile.parameters = {
  viewport: {
    defaultViewport: 'iphonexr'
  }
}