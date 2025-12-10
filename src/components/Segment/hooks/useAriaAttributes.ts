import { useMemo } from "react";
import { getMaxPercentage } from "../utils";
import type { AriaAttributes, SegmentFill } from "../types";

interface UseAriaAttributesParams {
  fill: SegmentFill;
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
  fill,
  ariaLabel,
  ariaValueNow,
  ariaValueMin = 0,
  ariaValueMax = 100,
  ariaValueText,
}: UseAriaAttributesParams): AriaAttributes => {
  return useMemo(() => {
    const maxPercentage = getMaxPercentage(fill);
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
    fill,
    ariaLabel,
    ariaValueNow,
    ariaValueMin,
    ariaValueMax,
    ariaValueText,
  ]);
};
