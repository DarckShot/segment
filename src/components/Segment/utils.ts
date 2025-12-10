import type { Layer, SegmentFill } from "./types";

/**
 * Ограничивает значение в диапазоне 0-100
 */
export const clampPercentage = (value: number): number => {
  return Math.min(Math.max(value, 0), 100);
};

/**
 * Создает слои заливки из объекта "статус: % от длины отрезка"
 */
export const createLayers = (fill: SegmentFill): Layer[] => {
  const layers: Layer[] = Object.entries(fill)
    .map(([status, percentage]) => ({
      percentage: clampPercentage(percentage),
      type: status,
      zIndex: 0,
    }))
    .filter((layer) => layer.percentage > 0);

  layers.sort((a, b) => b.percentage - a.percentage);

  layers.forEach((layer, index) => {
    layer.zIndex = index + 1;
  });

  return layers;
};

/**
 * Вычисляет максимальный процент из объекта заливки
 */
export const getMaxPercentage = (fill: SegmentFill): number => {
  return Math.max(...Object.values(fill), 0);
};
