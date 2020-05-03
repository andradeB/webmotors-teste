import * as React from "react";
import { Range } from "react-range";

export default function LocationRange({ value, onChange, min, max, step }) {
  return (
    <div className="component-range">
      <span>{min}</span>
      <Range
        step={step}
        min={min}
        max={max}
        values={value}
        onChange={(value) => onChange(value)}
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
              float: "left",
              height: "12px",
              width: "12px",
              borderRadius: "10px",
              outline: "none",
              backgroundColor: "#ca242e",
            }}
          ></div>
        )}
      />
      <span>{max}</span>
    </div>
  );
}
