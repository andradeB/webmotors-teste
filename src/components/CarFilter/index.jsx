import React, { useState, useEffect } from "react";

import Dropdown from "../Dropdown";
import GroupCheckbox from "../GroupCheckbox";
import Location from "../Location";
import { RiArrowDropRightLine } from "react-icons/ri";
import { helpers, make, model, version } from "../../services";

const checkboxes = [
  { label: "Novo", id: 1 },
  { label: "Usado", id: 2 },
];

const initialData = {
  MakeID: 0,
  ModelID: 0,
  VersionID: 0,
};

export default function () {
  const [makeOptions, setMakeOptions] = useState([]);
  const [modelOptions, setModelOptions] = useState([]);
  const [versionOptions, setVersionOptions] = useState([]);

  const [data, setData] = useState(initialData);

  const setMake = (MakeID) => setData({ ...data, MakeID });
  const setModel = (ModelID) => setData({ ...data, ModelID });
  const setVersion = (VersionID) => setData({ ...data, VersionID });

  useEffect(() => {
    helpers.convert(make).then(setMakeOptions);
  }, []);

  useEffect(() => {
    const { MakeID } = data;
    if (MakeID) {
      helpers.convert(model, MakeID).then(setModelOptions);
    }
    setVersionOptions([]);
  }, [data.MakeID]);

  useEffect(() => {
    const { ModelID } = data;

    if (ModelID) {
      helpers.convert(version, ModelID).then(setVersionOptions);
    }
  }, [data.ModelID]);

  useEffect(() => {
    setModel(0);
  }, [makeOptions]);
  useEffect(() => {
    setVersion(0);
  }, [modelOptions]);

  return (
    <form className="pane">
      <span>
        <GroupCheckbox options={checkboxes} />
      </span>
      <span className="grid">
        <div>
          <Location />
        </div>
        <div>
          <Dropdown
            prefix="Marca:"
            value={data.make}
            options={makeOptions}
            onChange={setMake}
          />
        </div>
        <div>
          <Dropdown
            prefix="Modelo:"
            value={data.model}
            options={modelOptions}
            onChange={setModel}
          />
        </div>
        <div>
          <Dropdown options={[]} value={3} prefix="Modelo:" />
        </div>
        <div>
          <Dropdown options={[]} value={3} prefix="Modelo:" />
        </div>
        <div>
          <Dropdown
            prefix="Versão:"
            value={data.version}
            options={versionOptions}
            onChange={setVersion}
          />
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
