import "./Product.css";
import React from "react";

export default function Product({ name, image, reviews }) {
  return (
    <div className="Product">
      <div
        className="Product__img"
        style={{ background: `url(${image})` }}
      ></div>
      <div className="Product__name">{name}</div>
      <div className="Product__score">
        {"*".repeat(
          Math.floor(reviews.reduce((a, c) => a + c.score, 0) / reviews.length)
        )}
      </div>
    </div>
  );
}
