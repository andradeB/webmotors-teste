import * as React from "react";
import { Range } from "react-range";

export default function LocationRange({ value, onChange }) {
  return (
    <Range
      step={1}
      min={1}
      max={100}
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
            height: "12px",
            width: "12px",
            borderRadius: "10px",
            outline: "none",
            backgroundColor: "#ca242e",
          }}
        ></div>
      )}
    />
  );
}
