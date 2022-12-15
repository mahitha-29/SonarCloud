import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, {ButtonProps}  from './index';
import {action,actions} from '@storybook/addon-actions'
export default {
 
  title: 'Atoms/Button',
  component: Button,
  argTypes:{color:{options:["primary","secondary","info","error","success"],control:"select"},
            variant:{options:["contained","outlined","text"],control:"select"},
             onClick: { action: 'clicked' }},


} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SecondaryButton = Template.bind({});
export const PrimaryButton = Template.bind({});

SecondaryButton.args = {
 name:'Continue',
 color:"secondary",
 disabled:false,
 variant:"contained"

};

PrimaryButton.args={
  color:"primary",
  name:'Sign Up',
  disabled:false,
  variant:"outlined",
};
