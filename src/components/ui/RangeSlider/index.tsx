import { useState } from "react";
import { Range } from "react-range";

const RangeSlider = () => {
  const [values, setValues] = useState([10.9]);
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
    <div style={{ margin: "50px" }}>
      <Range
        step={0.1} // Daha dəqiq hərəkət üçün kiçik step dəyəri
        min={Math.min(...STEPS)}
        max={Math.max(...STEPS)}
        values={values}
        onChange={
          (newValues) => setValues([findClosestValue(newValues[0])]) // Yalnız ən yaxın dəyərləri seçirik
        }
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "2px",
              width: "100%",
              backgroundColor: "#ccc",
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
              backgroundColor: "#007bff",
            }}
          />
        )}
      />
      <output style={{ marginTop: "10px" }}>{values[0]}</output>
    </div>
  );
};

export default RangeSlider;
