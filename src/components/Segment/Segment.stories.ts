import type { Meta, StoryObj } from '@storybook/react';
import Segment from './Segment';

const meta = {
  title: 'Components/Segment',
  component: Segment,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    length: {
      control: { type: 'range', min: 50, max: 500, step: 10 },
      description: 'Длина отрезка в условных единицах (px)',
    },
    height: {
      control: { type: 'range', min: 16, max: 48, step: 4 },
      description: 'Высота отрезка в px',
    },
    primary: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
      description: 'Основная заливка (сплошная) в процентах',
    },
    secondary: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
      description: 'Вторичная заливка (штриховка) в процентах',
    },
  },
} satisfies Meta<typeof Segment>;

export default meta;
type Story = StoryObj<typeof meta>;

// Вариант 1: Пустой отрезок (0%)
export const Empty: Story = {
  args: {
    length: 140,
    height: 24,
    primary: 0,
    secondary: 0,
  },
};

// Вариант 2: Штриховка 100% + сплошная 65% поверх
export const StripedBackgroundWithSolid: Story = {
  args: {
    length: 140,
    height: 24,
    primary: 65,
    secondary: 100,
  },
};

// Вариант 3: Полная заливка сплошная (100%)
export const FullSolid: Story = {
  args: {
    length: 340,
    height: 24,
    primary: 100,
    secondary: 0,
  },
};

// Штриховка 100%, основная 30%
export const StripedFullWithPartialSolid: Story = {
  args: {
    length: 340,
    height: 24,
    primary: 30,
    secondary: 100,
  },
};

// Только основная заливка 40%
export const OnlyPrimary: Story = {
  args: {
    length: 200,
    height: 24,
    primary: 40,
    secondary: 0,
  },
};

// Только штриховка 60%
export const OnlySecondary: Story = {
  args: {
    length: 200,
    height: 24,
    primary: 0,
    secondary: 60,
  },
};

// Штриховка 50%, основная 80%
export const OverlappingFills: Story = {
  args: {
    length: 300,
    height: 24,
    primary: 80,
    secondary: 50,
  },
};

// С явным указанием типа заливки
export const WithExplicitFillType: Story = {
  args: {
    length: 200,
    height: 24,
    primary: 70,
    secondary: 100,
  },
};

// Маленький отрезок
export const Small: Story = {
  args: {
    length: 80,
    height: 16,
    primary: 50,
    secondary: 80,
  },
};

// Большой отрезок
export const Large: Story = {
  args: {
    length: 500,
    height: 32,
    primary: 75,
    secondary: 100,
  },
};
