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

export interface Layer {
  percentage: number;
  type: string;
  zIndex: number;
}

export interface AriaAttributes {
  label: string;
  valueNow: number;
  valueMin: number;
  valueMax: number;
  valueText: string;
}
