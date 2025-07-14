import type { Meta, StoryObj } from '@storybook/react';
import AssetList from '@/components/AssetList';

const meta: Meta<typeof AssetList> = {
  component: AssetList,
  args: {
    items: [
      { id: '1', title: 'Example', description: 'Short description', isFavorite: false }
    ],
    onSelect: () => alert('clicked')
  }
};
export default meta;
type Story = StoryObj<typeof AssetList>;
export const Basic: Story = {};
