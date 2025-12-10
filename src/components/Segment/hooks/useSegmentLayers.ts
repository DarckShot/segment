import { useMemo } from "react";
import { createLayers } from "../utils";
import type { Layer } from "../types";

/**
 * Хук для создания и мемоизации слоев сегмента
 */
export const useSegmentLayers = (percentages: number[]): Layer[] => {
  return useMemo(() => createLayers(percentages), [percentages]);
};
