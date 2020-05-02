import React from "react";
import { GiRaceCar } from "react-icons/gi";
import { MdMotorcycle } from "react-icons/md";

export default function Header() {
  return (
    <header>
      <img src="/logo.svg" />
      <nav>
        <ul>
          <li className="active">
            <a href="">
              <GiRaceCar />
              <span>
                <label>Comprar</label>
                <label>Comprar</label>
              </span>
            </a>
          </li>
          <li>
            <a href="">
              <MdMotorcycle />
              <span>
                <label>Comprar</label>
                <label>Motos</label>
              </span>
            </a>
          </li>
        </ul>

        <div>
          <button className="sale">Vender meu Carro</button>
        </div>
      </nav>
    </header>
  );
}
