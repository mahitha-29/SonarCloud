import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import MuiTextField  from '.';

export default {
 
  title: 'Atoms/MuiTextField',
  component: MuiTextField,

} as ComponentMeta<typeof MuiTextField>;


const Template: ComponentStory<typeof MuiTextField> =  (args) =>  <MuiTextField {...args} />;

export const SecondaryMuiTextField = Template.bind({});
export const PrimaryMuiTextField = Template.bind({});

SecondaryMuiTextField.args = {
 label:'Email',
 color:"secondary",
 variant:"outlined",
 type:"email"
};

PrimaryMuiTextField.args={
  color:"primary",
  label:'Password',
  variant:"standard",
  type:"password"
};

