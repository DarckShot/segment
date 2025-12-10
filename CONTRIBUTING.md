# Contributing to Segment Component

Спасибо за интерес к улучшению компонента Segment!

## Оглавление

- [Начало работы](#начало-работы)
- [Структура проекта](#структура-проекта)
- [Разработка](#разработка)
- [Стандарты кода](#стандарты-кода)
- [Тестирование](#тестирование)
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
├── types.ts                 # TypeScript типы
├── utils.ts                 # Утилитные функции
├── Segment.scss             # Стили
├── Segment.stories.ts       # Storybook истории
├── index.ts                 # Экспорты
└── hooks/
    ├── index.ts
    ├── useSegmentLayers.ts  # Хук для обработки слоев
    └── useAriaAttributes.ts # Хук для ARIA атрибутов
```

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
- Добавляйте JSDoc комментарии к типам

```tsx
/**
 * Пропсы компонента Segment
 */
export interface SegmentProps {
  /** Длина отрезка в пикселях */
  length: number;
  // ...
}
```

### React

- Используйте функциональные компоненты
- Применяйте `memo()` для оптимизации
- Выносите логику в кастомные хуки
- Используйте `useMemo` и `useCallback` там, где необходимо

```tsx
const Component = memo<Props>(({ prop }) => {
  const value = useMemo(() => compute(prop), [prop]);
  return <div>{value}</div>;
});

Component.displayName = "Component";
```

### Стили

- Используйте BEM методологию
- SCSS препроцессор
- Модульность и переиспользование

```scss
.segment {
  &__layer {
    &--solid {
    }
    &--striped {
    }
  }
}
```

### Именование

- **Компоненты:** PascalCase (`Segment`)
- **Хуки:** camelCase с префиксом `use` (`useSegmentLayers`)
- **Утилиты:** camelCase (`clampPercentage`)
- **Типы:** PascalCase (`SegmentProps`)
- **Константы:** UPPER_SNAKE_CASE (`FILL_TYPES`)

## Тестирование

### Запуск тестов

```bash
npm test
```

### Покрытие

```bash
npm run test:coverage
```

### Что тестировать

- Утилитные функции
- Кастомные хуки
- Рендеринг компонента
- Доступность (a11y)
- Крайние случаи

Пример:

```tsx
describe("clampPercentage", () => {
  it("should clamp value between 0 and 100", () => {
    expect(clampPercentage(-10)).toBe(0);
    expect(clampPercentage(150)).toBe(100);
    expect(clampPercentage(50)).toBe(50);
  });
});
```

## Pull Requests

### Процесс

1. Создайте новую ветку от `main`

   ```bash
   git checkout -b feature/my-feature
   ```

2. Внесите изменения
3. Добавьте тесты
4. Запустите линтер и тесты

   ```bash
   npm run lint
   npm run format
   npm test
   ```

5. Зафиксируйте изменения

   ```bash
   git commit -m "feat: add new feature"
   ```

6. Отправьте в репозиторий

   ```bash
   git push origin feature/my-feature
   ```

7. Создайте Pull Request

### Commit сообщения

Используйте Conventional Commits:

- `feat:` - новая функциональность
- `minor:` - не значительные изменения
- `fix:` - исправление бага
- `docs:` - изменения документации
- `style:` - форматирование кода
- `refactor:` - рефакторинг
- `test:` - добавление тестов
- `chore:` - обновление зависимостей и т.д.

Примеры:

```
feat: add striped layer support
fix: correct aria-label generation
docs: update README with new props
refactor: extract layers logic to hook
```

### Чеклист PR

- [ ] Код проходит линтер
- [ ] Код отформатирован Prettier
- [ ] Добавлены тесты
- [ ] Тесты проходят
- [ ] Обновлена документация
- [ ] Storybook истории обновлены
- [ ] Проверена доступность (a11y)

## Доступность

Все изменения должны соответствовать WCAG 2.1 Level AA:

- Используйте семантический HTML
- Добавляйте ARIA атрибуты где необходимо
- Обеспечьте навигацию с клавиатуры
- Проверяйте контрастность цветов
- Тестируйте со скринридерами

## Поддержка

Есть вопросы? Создайте Issue в репозитории.

Спасибо за ваш вклад!
