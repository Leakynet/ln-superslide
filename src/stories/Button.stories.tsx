import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

// Component
import { Button, ButtonProps} from '../components/Button'

export default { title: 'Example/Button',
     parameters: {
       component: Button,
       componentSubtitle: 'I hope you know what a button is.'
     }
  } as Meta;


const Template: Story<ButtonProps> = (args) => <Button {...args} />;


export const Default = Template.bind({});
Default.args = {
  primary: false,
  label: 'I am a Button'
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'I am a Primary Button'
}

export const Theme = Template.bind({});
Theme.args = {
  primary: false,
  label: 'I am a Theme Button',
  theme: 'success'
};


export const Disabled = Template.bind({});
Disabled.args = {
  primary: false,
  disabled: true,
  label: 'I am a Disabled Button'
}

export const Link = Template.bind({});
Link.args = {
  primary: false,
  type: 'link',
  label: 'I am a Link Type Button'
}

export const Text = Template.bind({});
Text.args = {
  primary: false,
  type: 'text',
  label: 'I am a Text Type Button'  
}