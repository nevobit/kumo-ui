import { Meta, StoryObj } from "@storybook/react";
import Textarea from ".";

const meta = {
    title: 'Components/Textarea',
    component: Textarea,
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