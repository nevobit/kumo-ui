import { Meta, StoryObj } from "@storybook/react";
import CopyButton from ".";

const meta = {
    title: 'Components/Buttons/CopyButton',
    component: CopyButton,
    tags: ['docsPage'],
    argTypes: {
        children: {
            control: {type: 'text'}
        },
        loading: {
            control: {type: 'boolean'}
        },
        language: {
            control: {
              type: 'select',
              options: ['english', 'spanish'],
            },
        }
    }
} satisfies Meta<typeof CopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        children: 'Button',
        loading: false,
        language: 'english'
    }
} 