import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import useClickOutside from "click-outside-hook";

export default function MoneyRange({
  placeholder = "",
  start = null,
  end = null,
  onChange = () => {},
}) {
  const [visible, setVisible] = useState(false);
  const [_start, setStart] = useState(start);
  const [_end, setEnd] = useState(end);

  const ref = useClickOutside(() => setVisible(false));

  const toggle = () => setVisible(!visible);
  const formatMoney = (data) =>
    parseFloat(data).toLocaleString("pt-BR", {
      minimumFractionDigits: 0,
      style: "currency",
      currency: "BRL",
    });

  useEffect(() => {
    setStart(formatMoney(start));

    console.log(formatMoney(start));
    setStart(formatMoney(end));
  }, []);

  useEffect(() => {
    console.log(formatMoney(start));
    setStart(formatMoney(start));
  }, [start]);

  useEffect(() => {
    console.log(formatMoney(end));
    setEnd(formatMoney(end));
  }, [end]);

  const getSelected = () => {
    if (start || end) {
      return (
        <div>
          <span className="value">
            {_start} - {_end}
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
            <div>R$ </div>
            <input
              type="number"
              value={start}
              onChange={({ target }) => onChange({ start: target.value, end })}
            />
            -<div>R$ </div>
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
