import { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta = {
    title: 'Components/Input',
    component: Input,
    tags: ['docsPage'],
    argTypes: {
        icon: {
            control: {text: ''}
        }
    }
}

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        icon: ''
    }
} 