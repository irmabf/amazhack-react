import "./ProductList.css";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/api.service";
import Product from "../product/Product";
import { useHistory } from "react-router-dom";

export default function ProductList() {
  const [productList, setProductList] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    // Fetch and set the productList here!
    getProducts()
      .then((r) => setProductList(r))
      .catch((err) => console.log(err));
  }, [history]);

  if (!productList) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="ProductList">
        {productList.map((p) => (
          <Product {...p} key={p.id} />
        ))}
      </div>
    );
  }
}
