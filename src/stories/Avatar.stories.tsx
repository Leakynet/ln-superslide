import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

// Component
import { Avatar, AvatarProps} from '../components/Avatar'

export default { title: 'Example/Avatar',
     component: Avatar,
  } as Meta;


const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;


export const Default = Template.bind({});
Default.args = {
    username: 'Jane User'
};

export const Image = Template.bind({});
Image.args = {
    username: 'Columbo Test',
    src: 'https://ca-times.brightspotcdn.com/dims4/default/944868c/2147483647/strip/true/crop/1600x900+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F4f%2Fcd%2F89489e8c9d0664b51c4909127c5a%2Flat-det1-g8psh8ke20090204150128'
}