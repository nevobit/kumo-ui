import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
    title: 'Components/Buttons/Button',
    component: Button,
    tags: ['docsPage'],
    argTypes: {
        children: {
            control: {type: 'text'}
        },
        loading: {
            control: {type: 'boolean'}
        },
        variant: {
            control: {
              type: 'select',
              options: ['primary', 'secondary', 'cancel', 'third', 'danger', 'gray', 'dark'],
            },
        },
    },
}


export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        children: 'Button',
        loading: false,
        variant: 'secondary',
    }
} 