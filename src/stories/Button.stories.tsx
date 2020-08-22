import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

// Component
import { Button, ButtonProps} from '../components/Button'

export default { title: 'Example/Button',
     component: Button,
  } as Meta;


const Template: Story<ButtonProps> = (args) => <Button {...args} />;


export const Default = Template.bind({});
Default.args = {
  primary: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: false,
  disabled: true
}