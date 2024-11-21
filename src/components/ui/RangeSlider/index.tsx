import { useState } from "react";
import { Range } from "react-range";

const RangeSlider = ({values,setValues}) => {
  const STEPS = [10.9, 12, 13, 15, 16, 17, 18, 19, 20];

  const findClosestValue = (val) => {
    return STEPS.reduce((prev, curr) =>
      Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev
    );
  };

  // 10.9, 11, 12, 13, 15, 16, 17, 18, 19, 20
  // 1. 10.9 -> 12 curr 10.9 prev = 0
  // 10.9 - 12 < 0-12

  // 2. 12 -> 13
  // curr

  return (
    <div className="w-full">
      <Range
        step={0.1}
        min={Math.min(...STEPS)}
        max={Math.max(...STEPS)}
        allowOverlap={true}
        values={values}
        onChange={(newValues) => setValues([findClosestValue(newValues[0])])}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "2px",
              width: "100%",
              background: `linear-gradient(to right, #f45369 ${
                ((values[0] - Math.min(...STEPS)) /
                  (Math.max(...STEPS) - Math.min(...STEPS))) *
                100
              }%, #ccc ${
                ((values[0] - Math.min(...STEPS)) /
                  (Math.max(...STEPS) - Math.min(...STEPS))) *
                100
              }%)`,
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              borderRadius: "50%",
              backgroundColor: "#f45369",
            }}
          />
        )}
      />
    </div>
  );
};

export default RangeSlider;
