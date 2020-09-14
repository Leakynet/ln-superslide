import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

// Component
import { Card, CardProps} from '../components/Card'
import { Button } from '../components/'

export default { title: 'Example/Card',
     component: Card,
  } as Meta;


const Template: Story<CardProps> = (args) => <Card {...args} />;


export const Default = Template.bind({});
Default.args = {
    children: 'Test Card Content',
    style: {'maxWidth' : "35rem"}
};

export const Header = Template.bind({});
Header.args = {
    title: 'I am in danger',
    children: 'Test Card Content',
    style: {'maxWidth' : "35rem"}
}

export const Footer = Template.bind({});
Footer.args = {
    children: 'Test Card Content',
    footer: <Button type='default' label='Footer Button' theme='success' />,
    style: {'maxWidth' : "35rem"}
}