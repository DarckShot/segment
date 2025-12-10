import type { Layer } from "./types";

export const FILL_TYPES = ["solid", "striped"] as const;

/**
 * Ограничивает значение в диапазоне 0-100
 */
export const clampPercentage = (value: number): number => {
  return Math.min(Math.max(value, 0), 100);
};

/**
 * Создает слои заливки из массива процентов
 */
export const createLayers = (percentages: number[]): Layer[] => {
  const layers: Layer[] = percentages
    .map((percentage, index) => ({
      percentage: clampPercentage(percentage),
      type: FILL_TYPES[index] || "solid",
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
 * Вычисляет максимальный процент из массива
 */
export const getMaxPercentage = (percentages: number[]): number => {
  return Math.max(...percentages, 0);
};
