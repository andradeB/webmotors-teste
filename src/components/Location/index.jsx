import React, { useState, useEffect } from "react";
import useClickOutside from "click-outside-hook";
import { FiMapPin } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { location } from "../../services";

const initialLocation = {
  visible: false,
  value: 0,
};
const initialRange = {
  visible: false,
  value: [],
};

export default function Dropdown({
  onCahngeRange = () => {},
  onChangeLocation = () => {},
  value = "",
}) {
  const [isTapping, setTapping] = useState(true);
  const [visible, setVisible] = useState(false);
  const [val, setValue] = useState(value);
  const [locationOptions, setLocation] = useState([]);
  const [selected, setSelected] = useState([]);

  const ref = useClickOutside(() => setVisible(false));

  function selectItem({ cidade, uf, estado }) {
    setTapping(false);
    setSelected({ cidade, uf, estado });
    setValue(`${cidade}-${uf}`);
    setLocation([]);
  }

  function GetItem({ cidade, uf, estado }, key) {
    return (
      <li key={key} onClick={() => selectItem({ cidade, uf, estado })}>
        {cidade} - {uf}
      </li>
    );
  }

  function filterCities(city, term) {
    const patter = RegExp(`.*${term}.*`);
    return city.search(patter) !== -1;
  }

  function filterStateByCity(estado = [], term) {
    const cidades = estado.cidades.filter((res) => filterCities(res, term));
    return { ...estado, cidades };
  }

  const convert = ({ sigla, cidades = [], nome }) =>
    cidades.map((cidade) => ({ uf: sigla, estado: nome, cidade }));

  function fillOptions(term) {
    const options = location.get();

    const data = options
      .map((res) => filterStateByCity(res, term))
      .filter((res) => res.cidades.length)
      .map(convert)
      .reduce((x, y) => x.concat(y), []);

    setLocation(data);
  }

  function tapping({ target }) {
    const { value } = target;

    if (value.length > 3 && isTapping) {
      setVisible(true);
      fillOptions(value);
    } else {
      setVisible(false);
    }

    //Quando o valor e setado pelo click
    if (!isTapping) {
      setTapping(true);
    }
    setValue(value);
  }

  function getLocationBox() {
    return (
      <ul
        style={{
          display: locationOptions.length && visible ? "block" : "none",
        }}
      >
        {locationOptions.map((item, i) => GetItem(item, i))}
      </ul>
    );
  }

  return (
    <div ref={ref} className={`location ${visible ? "opened" : ""}`}>
      <div className="selected-area">
        <FiMapPin />
        <label>Onde ?</label>
        <input value={val} onChange={tapping} />
      </div>
      <div className="range-area">
        <div>
          <span>Raio: </span>
          <span className="value">100km</span>
        </div>
        <IoMdArrowDropdown />
      </div>
      {getLocationBox()}
    </div>
  );
}
