# Contributing to Segment Component

Спасибо за интерес к улучшению компонента Segment!

## Оглавление

- [Начало работы](#начало-работы)
- [Структура проекта](#структура-проекта)
- [Разработка](#разработка)
- [Стандарты кода](#стандарты-кода)
- [Pull Requests](#pull-requests)

## Начало работы

### Требования

- Node.js >= 18
- npm >= 9

### Установка

```bash
# Клонируйте репозиторий
git clone <repository-url>

# Установите зависимости
npm install

# Запустите dev-сервер
npm run dev
```

## Структура проекта

```
src/components/Segment/
├── Segment.tsx              # Основной компонент
├── types.ts                 # TypeScript типы и интерфейсы
├── utils.ts                 # Утилитные функции
├── Segment.scss             # Стили компонента
├── Segment.stories.tsx      # Storybook истории
├── index.ts                 # Публичные экспорты
└── hooks/
    ├── index.ts
    ├── useSegmentLayers.ts  # Хук для создания слоев из fill объекта
    └── useAriaAttributes.ts # Хук для генерации ARIA атрибутов
```

### Ключевые файлы

**Segment.tsx** - основной компонент с мемоизацией и обработкой событий

**types.ts** - типы данных:
- `SegmentFill` - объект "статус: процент"
- `SegmentProps` - пропсы компонента
- `Layer` - структура слоя заливки
- `AriaAttributes` - ARIA атрибуты

**utils.ts** - утилитные функции:
- `clampPercentage()` - ограничение значений 0-100
- `createLayers()` - создание слоев из fill объекта
- `getMaxPercentage()` - поиск максимального процента

**hooks/** - кастомные React хуки для разделения логики

## Разработка

### Запуск в режиме разработки

```bash
npm run dev
```

### Storybook

```bash
npm run storybook
```

Откроется на `http://localhost:6006`

Storybook содержит множество примеров использования компонента:
- Базовые примеры (solid, striped)
- Различные размеры (small, large)
- Множественные слои
- Интерактивные примеры с событиями
- Варианты прогресса

### Линтинг

```bash
npm run lint
```

### Форматирование

```bash
# Проверить форматирование
npm run format:check

# Применить форматирование
npm run format
```

## Стандарты кода

### TypeScript

- Используйте строгую типизацию
- Все публичные API должны иметь типы
- Добавляйте JSDoc комментарии к типам и функциям

```tsx
/**
 * Тип статуса заливки сегмента
 */
export type SegmentStatus = "solid" | "striped" | string;

/**
 * Заливка отрезка: набор "статус: % от длины отрезка"
 */
export type SegmentFill = Record<SegmentStatus, number>;
```

### React

- Используйте функциональные компоненты
- Применяйте `memo()` для оптимизации производительности
- Выносите логику в кастомные хуки
- Используйте `useMemo` и `useCallback` там, где необходимо

```tsx
const Component = memo<Props>(({ prop }) => {
  const layers = useSegmentLayers(fill);
  const aria = useAriaAttributes({ fill, ariaLabel });
  
  return <div>{/* content */}</div>;
});

Component.displayName = "Component";
```

### Кастомные хуки

Хуки должны:
- Начинаться с префикса `use`
- Принимать параметры через объект для гибкости
- Возвращать мемоизированные значения
- Иметь четкие зависимости в `useMemo`/`useCallback`

```tsx
export const useSegmentLayers = (fill: SegmentFill): Layer[] => {
  return useMemo(() => createLayers(fill), [fill]);
};
```

### Стили

- Используйте BEM методологию
- SCSS препроцессор
- Модификаторы для вариантов стилей

```scss
.segment {
  // базовые стили
  
  &__layer {
    // стили слоя
    
    &--solid {
      // вариант solid
    }
    
    &--striped {
      // вариант striped
    }
  }
  
  &--empty {
    // модификатор для пустого сегмента
  }
}
```

### Именование

- **Компоненты:** PascalCase (`Segment`)
- **Хуки:** camelCase с префиксом `use` (`useSegmentLayers`, `useAriaAttributes`)
- **Утилиты:** camelCase (`clampPercentage`, `createLayers`)
- **Типы:** PascalCase (`SegmentProps`, `SegmentFill`, `Layer`)
- **Константы:** UPPER_SNAKE_CASE (если используются)

### Утилитные функции

Утилиты должны быть:
- Чистыми функциями (без побочных эффектов)
- Хорошо протестированными
- Документированными с JSDoc

```tsx
/**
 * Ограничивает значение в диапазоне 0-100
 */
export const clampPercentage = (value: number): number => {
  return Math.min(Math.max(value, 0), 100);
};
```

## Добавление новых статусов заливки

Для добавления нового статуса заливки:

1. Добавьте CSS класс в `Segment.scss`:

```scss
.segment__layer--new-status {
  background-color: #your-color;
  // дополнительные стили
}
```

2. Используйте в компоненте:

```tsx
<Segment
  length={400}
  height={24}
  fill={{ solid: 80, "new-status": 60 }}
/>
```

3. Добавьте story в `Segment.stories.tsx` для демонстрации

## Pull Requests

### Процесс

1. Создайте новую ветку от `main`

   ```bash
   git checkout -b feature/my-feature
   ```

2. Внесите изменения
3. Добавьте/обновите тесты
4. Добавьте/обновите Storybook истории если необходимо
5. Запустите линтер, форматтер и тесты

   ```bash
   npm run lint
   npm run format
   ```

6. Зафиксируйте изменения с понятным сообщением

   ```bash
   git commit -m "feat: add new feature"
   ```

7. Отправьте изменения и создайте PR

### Сообщения коммитов

Используйте [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - новая функциональность
- `minor:` - не значительные изменения
- `fix:` - исправление бага
- `docs:` - изменения в документации
- `style:` - форматирование кода
- `refactor:` - рефакторинг без изменения функциональности
- `test:` - добавление тестов
- `chore:` - обновление зависимостей и т.д.

### Чеклист для PR

- [ ] Код проходит линтинг (`npm run lint`)
- [ ] Код отформатирован (`npm run format`)
- [ ] Добавлены/обновлены тесты
- [ ] Добавлена/обновлена документация
- [ ] Добавлены Storybook примеры для новой функциональности
- [ ] Проверена доступность (a11y)

## Вопросы?

Если у вас есть вопросы или нужна помощь, создайте issue в репозитории.

Спасибо за вклад! 
