import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import useClickOutside from "click-outside-hook";
import Range from "../Range";

export default function MoneyRange({
  placeholder = "",
  start,
  end,
  onChange = () => {},
}) {
  const [visible, setVisible] = useState(false);
  const ref = useClickOutside(() => setVisible(false));

  const toggle = () => setVisible(!visible);

  const getSelected = () => {
    if (start || end) {
      return (
        <div>
          <span className="value">
            {start} - {end}
          </span>
        </div>
      );
    } else {
      return <div>{placeholder}</div>;
    }
  };

  const getBox = (visible) => {
    if (visible) {
      return (
        <ul>
          <li>
            <div>De</div>
            <input
              type="number"
              value={start}
              onChange={({ target }) => onChange({ start: target.value, end })}
            />
            <div>até</div>
            <input
              type="number"
              value={end}
              onChange={({ target }) => onChange({ start, end: target.value })}
            />
          </li>
        </ul>
      );
    }
  };

  const getIcon = (visible) => {
    if (!visible) {
      return <IoMdArrowDropdown />;
    }
  };

  return (
    <div ref={ref} className={`money-range ${visible ? "opened" : ""}`}>
      <div className="selected-area" onClick={() => toggle()}>
        {getSelected()}
        {getIcon(visible)}
      </div>
      {getBox(visible)}
    </div>
  );
}
