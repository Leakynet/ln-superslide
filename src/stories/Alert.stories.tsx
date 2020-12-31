import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

// Component
import { Alert, AlertProps} from '../components/Alert'

const dismissHandler = () => {
    console.log('Dismiss Clicked')
}

const clickHandler = () => {
    console.log('Click Handler')
}

export default { title: 'Example/Alert',
     component: Alert,
  } as Meta;


const Template: Story<AlertProps> = (args) => <Alert {...args} />;


export const Default = Template.bind({});
Default.args = {
    children: 'Sample Alert',
    dismissable: false,
    onClick: clickHandler
};

export const Dismissable = Template.bind({});
Dismissable.args = {
    children: 'Dismissable Alert',
    dismissable: true,
    onClick: clickHandler,
    onDismiss: dismissHandler
}

export const Themed = Template.bind({});
Themed.args = {
    children: 'Themed Alert',
    dismissable: true,
    theme: 'success',
    onClick: clickHandler,
    onDismiss: dismissHandler
}

