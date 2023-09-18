import { Meta, StoryObj } from "@storybook/react";
import CopyButton from ".";

const meta = {
    title: 'Components/Buttons/CopyButton',
    component: CopyButton,
    tags: ['docsPage'],
    argTypes: {
        language: {
            control: {
              type: 'select',
              options: ['english', 'spanish'],
            }
        }
    }
}

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        language: 'english'
    }
} 