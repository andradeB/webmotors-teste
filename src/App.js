import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import CarFilter from "./components/CarFilter";
import { MdViewModule, MdViewAgenda } from "react-icons/md";
import { vehicles } from "./services";
import Card from "./components/ProductCard";

function App() {
  const classTypes = {
    flex: "product-column",
    grid: "product-grid",
  };
  const [page, setPage] = useState(1);
  const [showLoading, setShowLoading] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const [productClass, serProductClass] = useState(classTypes.grid);
  const [carList, setCarList] = useState([]);
  const [visible, setVisible] = useState(true);

  const addItem = (data) => {
    setCarList((prevent) => {
      console.log(prevent);
      return prevent.concat(data);
    });
  };

  const loadMore = async (page) => {
    setShowLoading(true);
    setPage(page);

    const data = await vehicles.get(page);

    setSeeMore(!!data.length);
    setTimeout(function () {
      setCarList(carList.concat(data));
      setShowLoading(false);
    }, 2000);
  };

  useEffect(() => {
    loadMore(page);
  }, []);

  function changeClass(classType) {
    setVisible(false);
    setTimeout(function () {
      serProductClass(classType);
      setVisible(true);
    }, 300);
  }

  const getItem = (car) => <Card key={car.ID} {...car} />;
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
      <footer>
        <div style={{ display: showLoading ? "" : "none" }}>
          <img src="/loading-busca.gif" alt="" />
        </div>
        <div>
          <button
            style={{ display: seeMore && !showLoading ? "" : "none" }}
            className="load-more"
            onClick={() => loadMore(page + 1)}
          >
            Ver mais
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
