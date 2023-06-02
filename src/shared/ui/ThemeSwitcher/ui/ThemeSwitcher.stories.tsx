import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ThemeSwitcher from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Normal: Story = {
    args: {
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const Dark: Story = {
    args: {
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
