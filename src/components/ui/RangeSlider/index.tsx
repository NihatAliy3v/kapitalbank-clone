import { Range } from "react-range";
import { STEPS } from "./config";

const RangeSlider = ({ values, setValues, isStep, min, max, step }) => {
  const minValue = isStep ? Math.min(...STEPS) : min;
  const maxValue = isStep ? Math.max(...STEPS) : max;
  const stepCount = step;

  const findClosestValue = (val) => {
    return STEPS.reduce((prev, curr) =>
      Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev
    );
  };

  const renderTrack = ({ props, children }) => (
    <div
      {...props}
      style={{
        ...props.style,
        height: "2px",
        width: "100%",
        background: `linear-gradient(to right, #f45369 ${
          ((values[0] - minValue) / (maxValue - minValue)) * 100
        }%, #ccc ${((values[0] - minValue) / (maxValue - minValue)) * 100}%)`,
      }}
    >
      {children}
    </div>
  );
  const renderThumb = ({ props }) => (
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
  );

  const handleChange = (newValues) => {
    if (isStep) {
      setValues([findClosestValue(newValues[0])]);
    } else {
      setValues(newValues);
    }
  };

  return (
    <div className="w-full">
      <Range
        step={stepCount}
        min={minValue}
        max={maxValue}
        allowOverlap={true}
        values={values}
        onChange={handleChange}
        renderTrack={renderTrack}
        renderThumb={renderThumb}
      />
    </div>
  );
};

export default RangeSlider;
