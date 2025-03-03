import { Range } from "react-range";
import { STEPS } from "./config";

interface RangeSliderProps {
  values: number[];
  setValues: (values: number[]) => void;
  isStep: boolean;
  min?: number;
  max?: number;
  step?: number;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  values,
  setValues,
  isStep,
  min,
  max,
  step,
}) => {
  const minValue = isStep ? Math.min(...STEPS) : min as number;
  const maxValue = isStep ? Math.max(...STEPS) : max as number;
  const stepCount = step;

  const findClosestValue = (val: number) => {
    return STEPS.reduce((prev, curr) =>
      Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev
    );
  };

  const renderTrack = ({
    props,
    children,
  }: {
    props: React.HTMLAttributes<HTMLDivElement>;
    children: React.ReactNode;
  }) => (
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
  const renderThumb = ({
    props,
  }: {
    props: React.HTMLAttributes<HTMLDivElement>;
  }) => (
    <div
      {...props}
      style={{
        ...props.style,
        height: "20px",
        width: "20px",
        borderRadius: "50%",
        backgroundColor: "#f45369",
        border: "4px solid #fff",
        boxShadow: "0 0 13px rgba(0, 0, 0, .19)"
      }}
    />
  );

  const handleChange = (newValues: number[]) => {
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
