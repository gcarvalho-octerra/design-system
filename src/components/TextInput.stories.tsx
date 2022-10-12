import { Meta, StoryObj } from '@storybook/react'
import { Fragment } from 'react'
import { TextInput, TextInputInputProps } from './TextInput'
import { Envelope } from 'phosphor-react';

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon><Envelope/></TextInput.Icon>,
            <TextInput.Input placeholder='Type your e-mail address'/>
        ]
    },
    argTypes: {}

    
} as Meta<TextInputInputProps>


export const Default: StoryObj<TextInputInputProps> = {}
