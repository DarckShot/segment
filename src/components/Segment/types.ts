import type { MouseEvent, FocusEvent, KeyboardEvent } from "react";

/**
 * Тип статуса заливки сегмента
 */
export type SegmentStatus = "solid" | "striped" | string;

/**
 * Заливка отрезка: набор "статус: % от длины отрезка"
 */
export type SegmentFill = Record<SegmentStatus, number>;

export interface SegmentProps {
  /**
   * Длина отрезка в условных единицах (px)
   */
  length: number;
  /**
   * Заливка отрезка: набор "статус: % от длины отрезка"
   * Пример: { solid: 70, striped: 50 }
   */
  fill: SegmentFill;
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
  /**
   * Обработчик клика по компоненту
   */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  /**
   * Обработчик двойного клика
   */
  onDoubleClick?: (event: MouseEvent<HTMLDivElement>) => void;
  /**
   * Обработчик получения фокуса
   */
  onFocus?: (event: FocusEvent<HTMLDivElement>) => void;
  /**
   * Обработчик потери фокуса
   */
  onBlur?: (event: FocusEvent<HTMLDivElement>) => void;
  /**
   * Обработчик нажатия клавиши
   */
  onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void;
  /**
   * Обработчик отпускания клавиши
   */
  onKeyUp?: (event: KeyboardEvent<HTMLDivElement>) => void;
  /**
   * Обработчик наведения мыши
   */
  onMouseEnter?: (event: MouseEvent<HTMLDivElement>) => void;
  /**
   * Обработчик ухода мыши
   */
  onMouseLeave?: (event: MouseEvent<HTMLDivElement>) => void;
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
