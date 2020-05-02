import React from "react";
import "./App.scss";
import Header from "./components/Header";
import CarFilter from "./components/CarFilter";

function App() {
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
