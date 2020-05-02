import React from "react";
import { GoCheck } from "react-icons/go";

export default function GroupCheckbox({ options = [], selecteds = [] }) {
  function getItem({ label, id }) {
    return (
      <li key={id}>
        <label>
          <input type="checkbox" name={label + id} value={id} />
          <span className="checkmark">
            <GoCheck />
          </span>
          <div>{label}</div>
        </label>
      </li>
    );
  }
  return <ul className="checkboxes">{options.map(getItem)}</ul>;
}
