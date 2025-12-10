import { useMemo } from "react";
import { getMaxPercentage } from "../utils";
import type { AriaAttributes } from "../types";

interface UseAriaAttributesParams {
  percentages: number[];
  ariaLabel?: string;
  ariaValueNow?: number;
  ariaValueMin?: number;
  ariaValueMax?: number;
  ariaValueText?: string;
}

/**
 * Хук для генерации ARIA атрибутов
 */
export const useAriaAttributes = ({
  percentages,
  ariaLabel,
  ariaValueNow,
  ariaValueMin = 0,
  ariaValueMax = 100,
  ariaValueText,
}: UseAriaAttributesParams): AriaAttributes => {
  return useMemo(() => {
    const maxPercentage = getMaxPercentage(percentages);
    const currentValue = ariaValueNow ?? maxPercentage;

    const label = ariaLabel || `Сегмент прогресса: ${currentValue}%`;
    const valueText = ariaValueText || `${currentValue} из ${ariaValueMax}`;

    return {
      label,
      valueNow: currentValue,
      valueMin: ariaValueMin,
      valueMax: ariaValueMax,
      valueText,
    };
  }, [
    percentages,
    ariaLabel,
    ariaValueNow,
    ariaValueMin,
    ariaValueMax,
    ariaValueText,
  ]);
};
