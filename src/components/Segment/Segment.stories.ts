import type { Meta, StoryObj } from "@storybook/react";
import Segment from "./Segment";

const meta = {
  title: "Components/Segment",
  component: Segment,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    length: {
      control: { type: "range", min: 50, max: 500, step: 10 },
      description: "Длина отрезка в условных единицах (px)",
    },
    height: {
      control: { type: "range", min: 16, max: 48, step: 4 },
      description: "Высота отрезка в px",
    },
    percentages: {
      description: "Массив процентов заливки",
    },
    ariaLabel: {
      control: "text",
      description: "Текстовое описание для скринридеров",
    },
    ariaValueNow: {
      control: { type: "number", min: 0, max: 100 },
      description: "Текущее значение прогресса",
    },
    ariaValueMin: {
      control: { type: "number", min: 0, max: 100 },
      description: "Минимальное значение",
    },
    ariaValueMax: {
      control: { type: "number", min: 0, max: 100 },
      description: "Максимальное значение",
    },
    ariaValueText: {
      control: "text",
      description: "Текстовое представление значения",
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
    percentages: [0],
    ariaLabel: "Задача не начата",
  },
};

// Вариант 2: Только основная заливка (solid)
export const OnlyPrimary: Story = {
  args: {
    length: 200,
    height: 24,
    percentages: [65],
    ariaLabel: "Прогресс выполнения задачи",
    ariaValueText: "65% выполнено",
  },
};

// Вариант 3: Штриховка 100% + сплошная 65% поверх
export const PrimaryAndSecondary: Story = {
  args: {
    length: 140,
    height: 24,
    percentages: [65, 100],
    ariaLabel: "Прогресс основной и дополнительной задачи",
    ariaValueText: "Основная задача: 65%, Дополнительная: 100%",
  },
};

// Вариант 4: Полная заливка сплошная (100%)
export const FullSolid: Story = {
  args: {
    length: 340,
    height: 24,
    percentages: [100],
    ariaLabel: "Задача выполнена",
    ariaValueText: "Выполнено полностью",
  },
};

// Вариант 5: Штриховка 100%, основная 30%
export const StripedFullWithPartialSolid: Story = {
  args: {
    length: 340,
    height: 24,
    percentages: [30, 100],
    ariaLabel: "Многоуровневый прогресс",
  },
};

// Два сегмента с кастомными aria атрибутами
export const WithCustomAria: Story = {
  args: {
    length: 300,
    height: 24,
    percentages: [45, 80],
    ariaLabel: "Загрузка файла",
    ariaValueNow: 45,
    ariaValueMin: 0,
    ariaValueMax: 100,
    ariaValueText: "45 из 100 мегабайт загружено",
  },
};

// Маленький отрезок с двумя заливками
export const Small: Story = {
  args: {
    length: 80,
    height: 16,
    percentages: [50, 80],
    ariaLabel: "Компактный индикатор",
  },
};

// Большой отрезок
export const Large: Story = {
  args: {
    length: 500,
    height: 32,
    percentages: [60, 100],
    ariaLabel: "Прогресс установки",
    ariaValueText: "60% установлено",
  },
};
