import "./Segment.scss";

export interface SegmentProps {
  /**
   * Длина отрезка в условных единицах (px)
   */
  length: number;
  /**
   * Массив процентов заливки (от 1 до n значений)
   * percentages[0] - основная заливка (solid)
   * percentages[1] - вторичная заливка (striped)
   */
  percentages: number[];
  /**
   * Высота отрезка в px
   */
  height?: number;
  /**
   * CSS класс для дополнительной стилизации
   */
  className?: string;
  /**
   * Текстовое описание для скринридеров
   */
  ariaLabel?: string;
  /**
   * Текущее значение для прогресс-бара (если используется как индикатор прогресса)
   */
  ariaValueNow?: number;
  /**
   * Минимальное значение для прогресс-бара
   */
  ariaValueMin?: number;
  /**
   * Максимальное значение для прогресс-бара
   */
  ariaValueMax?: number;
  /**
   * Текстовое представление текущего значения
   */
  ariaValueText?: string;
}

interface Layer {
  percentage: number;
  type: string;
  zIndex: number;
}

const Segment = ({
  length,
  percentages,
  height = 24,
  className = "",
  ariaLabel,
  ariaValueNow,
  ariaValueMin = 0,
  ariaValueMax = 100,
  ariaValueText,
}: SegmentProps) => {
  const fillTypes = ["solid", "striped"];

  const layers: Layer[] = percentages
    .map((percentage, index) => {
      const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
      return {
        percentage: clampedPercentage,
        type: fillTypes[index],
        zIndex: 0,
      };
    })
    .filter((layer) => layer.percentage > 0);

  layers.sort((a, b) => b.percentage - a.percentage);

  layers.forEach((layer, index) => {
    layer.zIndex = index + 1;
  });

  // Определяем максимальный процент для aria-valuenow если не передан явно
  const maxPercentage = Math.max(...percentages, 0);
  const currentValue =
    ariaValueNow !== undefined ? ariaValueNow : maxPercentage;

  // Генерируем описание по умолчанию
  const defaultLabel = ariaLabel || `Сегмент прогресса: ${currentValue}%`;
  const defaultValueText =
    ariaValueText || `${currentValue} из ${ariaValueMax}`;

  return (
    <div
      className={`segment ${className}`}
      style={{
        width: `${length}px`,
        height: `${height}px`,
      }}
      role="progressbar"
      aria-label={defaultLabel}
      aria-valuenow={currentValue}
      aria-valuemin={ariaValueMin}
      aria-valuemax={ariaValueMax}
      aria-valuetext={defaultValueText}
      tabIndex={0}
    >
      {layers.map((layer, index) => (
        <div
          key={`${layer.type}-${index}`}
          className={`segment__layer segment__layer--${layer.type}`}
          style={{
            width: `${layer.percentage}%`,
            zIndex: layer.zIndex,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default Segment;
