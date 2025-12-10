import { useMemo } from "react";
import { createLayers } from "../utils";
import type { Layer, SegmentFill } from "../types";

/**
 * Хук для создания и мемоизации слоев сегмента
 */
export const useSegmentLayers = (fill: SegmentFill): Layer[] => {
  return useMemo(() => createLayers(fill), [fill]);
};
