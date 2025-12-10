# Segment Component

React компонент для визуализации сегментированного прогресс-бара с поддержкой множественных слоев заливки.

## Возможности

- Множественные слои заливки (solid, striped и кастомные статусы)
- Гибкая система статусов заливки
- Полная поддержка доступности (WCAG 2.1)
- Оптимизация с мемоизацией
- TypeScript поддержка
- Навигация с клавиатуры
- Обработка событий (клик, фокус, hover)
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
      fill={{ solid: 65 }}
      ariaLabel="Прогресс выполнения задачи"
    />
  );
}
```

### Множественные слои с разными статусами

```tsx
<Segment
  length={300}
  height={32}
  fill={{ solid: 80, striped: 60 }}
  ariaLabel="Загрузка файла"
  ariaValueText="60 из 100 мегабайт загружено"
/>
```

### Кастомные статусы заливки

```tsx
<Segment
  length={400}
  height={24}
  fill={{ solid: 90, striped: 70, custom: 50 }}
  ariaLabel="Прогресс с множественными слоями"
/>
```

### С обработчиками событий

```tsx
<Segment
  length={400}
  height={24}
  fill={{ solid: 55, striped: 40 }}
  ariaLabel="Интерактивный сегмент"
  onClick={(e) => console.log('Клик по сегменту')}
  onMouseEnter={(e) => console.log('Мышь наведена')}
  onFocus={(e) => console.log('Фокус получен')}
/>
```

## Props

| Prop             | Тип                               | Описание                          | По умолчанию |
| ---------------- | --------------------------------- | --------------------------------- | ------------ |
| `length`         | `number`                          | Длина сегмента в пикселях         | - (required) |
| `fill`           | `Record<string, number>`          | Объект "статус: % от длины"       | - (required) |
| `height`         | `number`                          | Высота сегмента в пикселях        | `24`         |
| `className`      | `string`                          | CSS класс для стилизации          | `''`         |
| `ariaLabel`      | `string`                          | Описание для скринридеров         | auto         |
| `ariaValueNow`   | `number`                          | Текущее значение прогресса        | auto         |
| `ariaValueMin`   | `number`                          | Минимальное значение              | `0`          |
| `ariaValueMax`   | `number`                          | Максимальное значение             | `100`        |
| `ariaValueText`  | `string`                          | Текстовое представление           | auto         |
| `onClick`        | `(event: MouseEvent) => void`     | Обработчик клика                  | -            |
| `onDoubleClick`  | `(event: MouseEvent) => void`     | Обработчик двойного клика         | -            |
| `onFocus`        | `(event: FocusEvent) => void`     | Обработчик получения фокуса       | -            |
| `onBlur`         | `(event: FocusEvent) => void`     | Обработчик потери фокуса          | -            |
| `onKeyDown`      | `(event: KeyboardEvent) => void`  | Обработчик нажатия клавиши        | -            |
| `onKeyUp`        | `(event: KeyboardEvent) => void`  | Обработчик отпускания клавиши     | -            |
| `onMouseEnter`   | `(event: MouseEvent) => void`     | Обработчик наведения мыши         | -            |
| `onMouseLeave`   | `(event: MouseEvent) => void`     | Обработчик ухода мыши             | -            |

## Типы заливки

По умолчанию компонент поддерживает два типа заливки со встроенными стилями:

- **solid** - сплошная заливка (цвет: `#d5c9df`)
- **striped** - полосатая заливка (диагональные полосы)

Вы можете добавить кастомные статусы, определив для них CSS классы:

```scss
.segment__layer--custom {
  background-color: #your-color;
}
```

## Структура проекта

```
src/components/Segment/
├── Segment.tsx              # Основной компонент
├── types.ts                 # TypeScript типы
├── utils.ts                 # Утилитные функции
├── Segment.scss             # Стили
├── Segment.stories.tsx      # Storybook истории
├── index.ts                 # Экспорты
└── hooks/
    ├── index.ts
    ├── useSegmentLayers.ts  # Хук для обработки слоев
    └── useAriaAttributes.ts # Хук для ARIA атрибутов
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

Компонент полностью поддерживает WCAG 2.1:

- Роль `progressbar` для семантической разметки
- Полная поддержка ARIA атрибутов
- Навигация с клавиатуры (tabIndex)
- Автоматическая генерация aria-label и aria-valuetext
- Поддержка скринридеров

Подробнее см. [A11Y.md](./A11Y.md)

## Лицензия

MIT License - см. [LICENSE](./LICENSE)

## Автор

Sergey Krasnopolskiy
