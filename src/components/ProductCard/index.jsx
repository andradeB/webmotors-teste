import React from "react";

export default function CardProduct(props) {
  const {
    ID,
    Make,
    Model,
    Version,
    Image,
    KM,
    Price,
    YearModel,
    YearFab,
    Color,
  } = props;

  return (
    <div className="product-card">
      <img src={Image} alt={Model} />
      <div className="description">
        <label htmlFor="" className="title">
          {Make} {Model}
        </label>
        <label htmlFor="" className="version">
          {Version}
        </label>
        <label htmlFor="" className="price">
          {parseFloat(Price).toLocaleString("pt-BR", {
            minimumFractionDigits: 0,
            style: "currency",
            currency: "BRL",
          })}
        </label>
      </div>
      <div className="footer">
        <div>
          {YearFab}/{YearModel}
        </div>
        <div>{KM} KM</div>
      </div>
      <div className="color">
        Cor: <span>{Color}</span>
      </div>
    </div>
  );
}
