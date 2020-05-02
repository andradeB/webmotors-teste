import React, { useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import CarFilter from "./components/CarFilter";
import { make, helpers } from "./services";

function App() {
  useEffect(() => {
    helpers.convert(make).then((res) => console.log(res));
  }, []);

  return (
    <div className="App">
      <main>
        <section className="box">
          <Header />
          <CarFilter />
        </section>
      </main>
    </div>
  );
}

export default App;
