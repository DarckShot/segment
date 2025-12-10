import { memo } from "react";
import "./Segment.scss";
import { useSegmentLayers, useAriaAttributes } from "./hooks";
import type { SegmentProps } from "./types";

const Segment = memo<SegmentProps>(
  ({
    length,
    percentages,
    height = 24,
    className = "",
    ariaLabel,
    ariaValueNow,
    ariaValueMin = 0,
    ariaValueMax = 100,
    ariaValueText,
    onClick,
    onDoubleClick,
    onFocus,
    onBlur,
    onKeyDown,
    onKeyUp,
    onMouseEnter,
    onMouseLeave,
  }) => {
    const layers = useSegmentLayers(percentages);

    const aria = useAriaAttributes({
      percentages,
      ariaLabel,
      ariaValueNow,
      ariaValueMin,
      ariaValueMax,
      ariaValueText,
    });

    return (
      <div
        className={`segment ${className}`}
        style={{
          width: `${length}px`,
          height: `${height}px`,
        }}
        role="progressbar"
        aria-label={aria.label}
        aria-valuenow={aria.valueNow}
        aria-valuemin={aria.valueMin}
        aria-valuemax={aria.valueMax}
        aria-valuetext={aria.valueText}
        tabIndex={0}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
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
  },
);

Segment.displayName = "Segment";

export default Segment;
