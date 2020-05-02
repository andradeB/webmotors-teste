import React from "react";

import Dropdown from "../Dropdown";
import GroupCheckbox from "../GroupCheckbox";
import { RiArrowDropRightLine } from "react-icons/ri";

const checkboxes = [
  { label: "Novo", id: 1 },
  { label: "Usado", id: 2 },
];

const options = [
  { label: "Ford", id: 1 },
  { label: "Voks", id: 2 },
  { label: "Audi", id: 3 },
  { label: "pneumoultramicroscopiosilicovulcanoconiose", id: 4 },
];

export default function () {
  return (
    <form className="pane">
      <span>
        <GroupCheckbox options={checkboxes} />
      </span>
      <span className="grid">
        <div>
          <Dropdown options={options} value={3} prefix="Modelo:" />
        </div>
        <div>
          <Dropdown options={options} value={3} prefix="Modelo:" />
        </div>
        <div>
          <Dropdown options={options} value={3} prefix="Modelo:" />
        </div>
        <div>
          <Dropdown options={options} value={3} prefix="Modelo:" />
        </div>
        <div>
          <Dropdown options={options} value={3} prefix="Modelo:" />
        </div>
        <div>
          <Dropdown options={options} value={3} prefix="Modelo:" />
        </div>
        <div>
          <a id="advenced-search">
            <RiArrowDropRightLine />
            Busca Avançada
          </a>
        </div>
        <div>
          <button className="reset">Limpar filtros</button>
          <button className="submit">Ver ofertas</button>
        </div>
      </span>
    </form>
  );
}
