import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import CarFilter from "./components/CarFilter";
import { MdViewModule, MdViewAgenda } from "react-icons/md";
import { vehicles } from "./services";
import Card from "./components/ProductCard";

function App() {
  const classTypes = {
    flex: "product-flex",
    grid: "product-grid",
  };
  const [productClass, serProductClass] = useState(classTypes.grid);
  const [carList, setCarList] = useState([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    vehicles.get(1).then(setCarList);
  }, []);

  function changeClass(classType) {
    setVisible(false);
    setTimeout(function () {
      serProductClass(classType);
      setVisible(true);
    }, 300);
  }

  const getItem = (car) => <Card {...car} />;
  return (
    <div className="App">
      <section id="filter">
        <section className="box">
          <Header />
          <CarFilter />
        </section>
      </section>
      <div className="container">
        <div id="grid-options">
          <div
            className="active"
            className={productClass == classTypes.grid ? "active" : ""}
            onClick={() => changeClass(classTypes.grid)}
          >
            <MdViewModule />
          </div>
          <div
            className={productClass == classTypes.flex ? "active" : ""}
            onClick={() => changeClass(classTypes.flex)}
          >
            <MdViewAgenda />
          </div>
        </div>
      </div>
      <main className={`${visible ? "fadeIn" : "fadeOut"} ${productClass}`}>
        <div className="list">{carList.map(getItem)}</div>
      </main>
    </div>
  );
}

export default App;
