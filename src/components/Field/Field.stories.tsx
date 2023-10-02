import { Meta, StoryObj } from "@storybook/react";
import Field from ".";
import Input from "../Inputs/Input";

const meta = {
    title: 'Components/Field',
    component: Field,
    tags: ['docsPage'],
    argTypes: {
        children: {
            control: {type: 'text'}
        },
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/zD9yJ3yqJj111111111111/Component-Field?node-id=120%3A100',
        }
    }
}

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        children: (
            <>
                <Input  /> 
            </>
        )
    }
} 