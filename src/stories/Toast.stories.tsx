import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

// Component
import { Toast, ToastProps} from '../components/Toast'

export default { title: 'Example/Toast',
     component: Toast,
  } as Meta;


const Template: Story<ToastProps> = (args) => <Toast {...args} />;


export const Default = Template.bind({});
Default.args = {
    title: 'Hello World',
    dismissable: true,
    children: 'This is some sample content',
    style: { 'maxWidth': "30rem" }
};