import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Label } from './Label';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Basic/Label',
  component: Label,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // 여기서 description 작성하는게 좋다는데?
    htmlFor: { control: 'text', description: 'Label의 for 속성' },
    children: { control: 'text', description: 'Label의 텍스트' },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    htmlFor: 'input',
    children: '이메일',
  },
};
