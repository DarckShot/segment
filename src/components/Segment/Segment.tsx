import React from 'react';
import './Segment.scss';

export type FillType = 'solid' | 'striped';

export interface SegmentProps {
  /**
   * Длина отрезка в условных единицах (px)
   */
  length: number;
  /**
   * Основная заливка (сплошная) - процент от общей длины (0-100)
   */
  primary: number;
  /**
   * Вторичная заливка (штриховка) - процент от общей длины (0-100)
   * Независима от primary и отображается как фоновый слой
   */
  secondary?: number;
  /**
   * Высота отрезка в px
   */
  height?: number;
  /**
   * CSS класс для дополнительной стилизации
   */
  className?: string;
}

const Segment: React.FC<SegmentProps> = ({
  length,
  primary,
  secondary = 0,
  height = 24,
  className = '',
}) => {
  // Автоматическое определение типа заливки
  const determineFillType = (): FillType => {
    // Логика автоопределения:
    // Если вторичная заливка больше основной - основная сплошная
    // Если основная заливка >= 100% - сплошная
    if (primary >= 100 || secondary > primary) {
      return 'solid';
    }

    // По умолчанию - сплошная
    return 'solid';
  };

  const actualFillType = determineFillType();

  // Ограничиваем проценты диапазоном 0-100
  const clampedPrimary = Math.min(Math.max(primary, 0), 100);
  const clampedSecondary = Math.min(Math.max(secondary, 0), 100);

  return (
    <div
      className={`segment ${className}`}
      style={{
        width: `${length}px`,
        height: `${height}px`,
      }}
    >
      {/* Вторичная заливка (штриховка) - фоновый слой */}
      {clampedSecondary > 0 && (
        <div
          className="segment__background segment__background--striped"
          style={{
            width: `${clampedSecondary}%`,
          }}
        />
      )}

      {/* Основная заливка - передний слой */}
      {clampedPrimary > 0 && (
        <div
          className={`segment__fill segment__fill--${actualFillType}`}
          style={{
            width: `${clampedPrimary}%`,
          }}
        />
      )}
    </div>
  );
};

export default Segment;
