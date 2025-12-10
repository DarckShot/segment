import type { Meta, StoryObj } from "@storybook/react";
import Segment from "./Segment";

const meta = {
  title: "Components/Segment",
  component: Segment,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Компонент Segment представляет собой визуальный индикатор прогресса с поддержкой различных статусов заливки (solid, striped и кастомных).",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    length: {
      control: { type: "range", min: 100, max: 800, step: 10 },
      description: "Длина отрезка в пикселях",
    },
    height: {
      control: { type: "range", min: 10, max: 100, step: 2 },
      description: "Высота отрезка в пикселях",
    },
    fill: {
      control: "object",
      description:
        "Заливка отрезка: набор 'статус: % от длины отрезка'. Например: { solid: 70, striped: 50 }",
    },
    className: {
      control: "text",
      description: "CSS класс для дополнительной стилизации",
    },
    ariaLabel: {
      control: "text",
      description: "Текстовое описание для скринридеров",
    },
    ariaValueNow: {
      control: { type: "number", min: 0, max: 100 },
      description: "Текущее значение для прогресс-бара",
    },
    ariaValueMin: {
      control: { type: "number", min: 0, max: 100 },
      description: "Минимальное значение для прогресс-бара",
    },
    ariaValueMax: {
      control: { type: "number", min: 0, max: 100 },
      description: "Максимальное значение для прогресс-бара",
    },
    ariaValueText: {
      control: "text",
      description: "Текстовое представление текущего значения",
    },
  },
} satisfies Meta<typeof Segment>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Базовый пример с заливкой solid и striped
 */
export const Default: Story = {
  args: {
    length: 400,
    height: 24,
    fill: { solid: 50, striped: 70 },
    ariaLabel: "Прогресс выполнения задачи",
  },
};

/**
 * Только solid заливка
 */
export const SolidOnly: Story = {
  args: {
    length: 400,
    height: 24,
    fill: { solid: 80 },
    ariaLabel: "Прогресс загрузки",
    ariaValueNow: 80,
    ariaValueText: "80% завершено",
  },
};

/**
 * Только striped заливка
 */
export const StripedOnly: Story = {
  args: {
    length: 400,
    height: 24,
    fill: { striped: 60 },
    ariaLabel: "Прогресс обработки",
    ariaValueNow: 60,
    ariaValueText: "60% обработано",
  },
};

/**
 * Пустой сегмент (без заливки)
 */
export const Empty: Story = {
  args: {
    length: 400,
    height: 24,
    fill: {},
    ariaLabel: "Задача не начата",
    ariaValueNow: 0,
    ariaValueText: "0% завершено",
  },
};

/**
 * Полностью заполненный сегмент
 */
export const Complete: Story = {
  args: {
    length: 400,
    height: 24,
    fill: { solid: 100 },
    ariaLabel: "Задача завершена",
    ariaValueNow: 100,
    ariaValueText: "100% завершено",
  },
};

/**
 * Маленький сегмент
 */
export const Small: Story = {
  args: {
    length: 200,
    height: 16,
    fill: { solid: 45, striped: 30 },
    ariaLabel: "Малый индикатор прогресса",
  },
};

/**
 * Большой сегмент
 */
export const Large: Story = {
  args: {
    length: 600,
    height: 40,
    fill: { solid: 65, striped: 45 },
    ariaLabel: "Большой индикатор прогресса",
  },
};

/**
 * Множественные слои заливки
 */
export const MultipleLayers: Story = {
  args: {
    length: 500,
    height: 30,
    fill: { solid: 90, striped: 70, custom: 50 },
    ariaLabel: "Прогресс с множественными слоями",
  },
};

/**
 * С обработчиками событий
 */
export const WithEventHandlers: Story = {
  args: {
    length: 400,
    height: 24,
    fill: { solid: 55, striped: 40 },
    ariaLabel: "Интерактивный сегмент",
    onClick: () => alert("Клик по сегменту"),
    onDoubleClick: () => alert("Двойной клик"),
    onMouseEnter: () => console.log("Мышь наведена"),
    onMouseLeave: () => console.log("Мышь покинула"),
    onFocus: () => console.log("Фокус получен"),
    onBlur: () => console.log("Фокус потерян"),
  },
};

/**
 * Различные варианты прогресса
 */
export const ProgressVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <div style={{ marginBottom: "8px", fontSize: "14px" }}>
          10% прогресс
        </div>
        <Segment
          length={400}
          height={24}
          fill={{ solid: 10 }}
          ariaLabel="10% завершено"
        />
      </div>
      <div>
        <div style={{ marginBottom: "8px", fontSize: "14px" }}>
          30% прогресс
        </div>
        <Segment
          length={400}
          height={24}
          fill={{ solid: 30 }}
          ariaLabel="30% завершено"
        />
      </div>
      <div>
        <div style={{ marginBottom: "8px", fontSize: "14px" }}>
          50% прогресс
        </div>
        <Segment
          length={400}
          height={24}
          fill={{ solid: 50 }}
          ariaLabel="50% завершено"
        />
      </div>
      <div>
        <div style={{ marginBottom: "8px", fontSize: "14px" }}>
          75% прогресс
        </div>
        <Segment
          length={400}
          height={24}
          fill={{ solid: 75 }}
          ariaLabel="75% завершено"
        />
      </div>
      <div>
        <div style={{ marginBottom: "8px", fontSize: "14px" }}>
          100% прогресс
        </div>
        <Segment
          length={400}
          height={24}
          fill={{ solid: 100 }}
          ariaLabel="100% завершено"
        />
      </div>
    </div>
  ),
};

/**
 * Комбинация solid и striped с разными соотношениями
 */
export const SolidStripedCombinations: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <div style={{ marginBottom: "8px", fontSize: "14px" }}>
          Solid 80%, Striped 60%
        </div>
        <Segment
          length={400}
          height={24}
          fill={{ solid: 80, striped: 60 }}
          ariaLabel="Solid 80%, Striped 60%"
        />
      </div>
      <div>
        <div style={{ marginBottom: "8px", fontSize: "14px" }}>
          Solid 60%, Striped 80%
        </div>
        <Segment
          length={400}
          height={24}
          fill={{ solid: 60, striped: 80 }}
          ariaLabel="Solid 60%, Striped 80%"
        />
      </div>
      <div>
        <div style={{ marginBottom: "8px", fontSize: "14px" }}>
          Solid 50%, Striped 50%
        </div>
        <Segment
          length={400}
          height={24}
          fill={{ solid: 50, striped: 50 }}
          ariaLabel="Solid 50%, Striped 50%"
        />
      </div>
      <div>
        <div style={{ marginBottom: "8px", fontSize: "14px" }}>
          Solid 100%, Striped 30%
        </div>
        <Segment
          length={400}
          height={24}
          fill={{ solid: 100, striped: 30 }}
          ariaLabel="Solid 100%, Striped 30%"
        />
      </div>
    </div>
  ),
};
