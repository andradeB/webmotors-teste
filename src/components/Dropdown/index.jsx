import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import useClickOutside from "click-outside-hook";

export default function Dropdown({
  options = [],
  value = 0,
  onChange = () => {},
  prefix = "",
}) {
  const [id, setId] = useState(value);
  const [visible, setVisible] = useState(false);
  const ref = useClickOutside(() => close());

  const defaultOptions = [{ label: "Todos", id: 0 }];

  const getItem = ({ label, id }) => {
    return (
      <li key={id} onClick={() => select(id)}>
        {label}
      </li>
    );
  };

  const select = (id) => {
    setId(id);
    onChange(id);
    close();
  };

  const open = () => (!!options.length ? setVisible(true) : null);
  const close = () => setVisible(false);
  const toggle = () => (visible ? close() : open());

  const _options = [...defaultOptions, ...options];

  useEffect(() => {
    if (!options.length) {
      select(0);
    } else {
      select(value);
    }
  }, [options]);

  const getSelected = (id) => {
    const { label } = _options.find((res) => res.id === id) ?? {};
    if (prefix) {
      return (
        <div>
          <span className="prefix">{prefix}</span>
          <span className="value">{label}</span>
        </div>
      );
    } else {
      return (
        <div>
          <span className="value">{label}</span>
        </div>
      );
    }
  };

  const getBox = (visible) => {
    if (visible) {
      return <ul>{_options.filter((res) => res.id !== "*").map(getItem)}</ul>;
    }
  };

  const getIcon = (visible) => {
    if (!visible) {
      return <IoMdArrowDropdown />;
    }
  };

  return (
    <div
      ref={ref}
      className={`dropdown ${visible ? "opened" : ""} ${
        !options.length ? "disabled" : ""
      }`}
    >
      <div className="selected-area" onClick={() => toggle()}>
        {getSelected(id)}
        {getIcon(visible)}
      </div>
      {getBox(visible)}
    </div>
  );
}
