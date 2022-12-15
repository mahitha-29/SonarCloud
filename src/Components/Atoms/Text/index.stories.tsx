import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyText from '.';

export default {
 
  title: 'Atoms/MyText',
  component: MyText,
  argTypes:{variant:{options:["h1","h2","h3","h4","subtitle1","subtitle2","body2","body1"],control:"select"}},


} as ComponentMeta<typeof MyText>;


const Template: ComponentStory<typeof MyText> = (args) => <MyText {...args} />;

export const SecondaryMyText = Template.bind({});
export const PrimaryMyText = Template.bind({});

SecondaryMyText.args = {
 text:"Seeder",
 variant:"h1"
};

PrimaryMyText.args={
  text:"login",
  variant:"body1"
};
