# Segment Component

React компонент для визуализации сегментированного прогресс-бара с поддержкой множественных слоев заливки.

## Возможности

- Множественные слои заливки (solid, striped)
- Полная поддержка доступности (WCAG 2.1)
- Оптимизация с мемоизацией
- TypeScript поддержка
- Навигация с клавиатуры
- Storybook документация

## Установка

```bash
npm install
```

## Использование

### Базовый пример

```tsx
import Segment from "./components/Segment";

function App() {
  return (
    <Segment
      length={200}
      height={24}
      percentages={[65]}
      ariaLabel="Прогресс выполнения задачи"
    />
  );
}
```

### Множественные слои

```tsx
<Segment
  length={300}
  height={32}
  percentages={[45, 80]}
  ariaLabel="Загрузка файла"
  ariaValueText="45 из 100 мегабайт загружено"
/>
```

## Props

| Prop            | Тип        | Описание                   | По умолчанию |
| --------------- | ---------- | -------------------------- | ------------ |
| `length`        | `number`   | Длина сегмента в пикселях  | - (required) |
| `percentages`   | `number[]` | Массив процентов заливки   | - (required) |
| `height`        | `number`   | Высота сегмента в пикселях | `24`         |
| `className`     | `string`   | CSS класс для стилизации   | `''`         |
| `ariaLabel`     | `string`   | Описание для скринридеров  | auto         |
| `ariaValueNow`  | `number`   | Текущее значение прогресса | auto         |
| `ariaValueMin`  | `number`   | Минимальное значение       | `0`          |
| `ariaValueMax`  | `number`   | Максимальное значение      | `100`        |
| `ariaValueText` | `string`   | Текстовое представление    | auto         |

## Структура проекта

```
src/components/Segment/
├── Segment.tsx              # Основной компонент
├── types.ts                 # TypeScript типы
├── utils.ts                 # Утилитные функции
├── Segment.scss             # Стили
├── Segment.stories.ts       # Storybook истории
└── hooks/
    ├── useSegmentLayers.ts  # Хук для слоев
    └── useAriaAttributes.ts # Хук для ARIA
```

## Команды

```bash
# Разработка
npm run dev

# Сборка
npm run build

# Линтинг
npm run lint

# Форматирование
npm run format
npm run format:check

# Storybook
npm run storybook
npm run build-storybook
```

## Доступность

Компонент полностью поддерживает WCAG 2.1. Подробнее см. [A11Y.md](./A11Y.md)

## Лицензия

MIT License - см. [LICENSE](./LICENSE)

## Автор

Sergey Krasnopolskiy
