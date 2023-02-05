import React, { Fragment } from "react";

import { useProductContext } from "../contexts/ProductsContext";
import { Product as ProductType } from "../types/Product";
import { CartIcon } from "./CartIcon";
import Product from "./Product";
import { StoreCart, StoreCartValue, StoreContainer, StoreTitle } from "./Store.styles";

const Store: React.FC = () => {
  const { products, totalQuantity } = useProductContext();

  return (
    <Fragment>
      <StoreTitle>Products</StoreTitle>
      <StoreCart>
        <CartIcon />
        <StoreCartValue>{totalQuantity}</StoreCartValue>
      </StoreCart>
      <StoreContainer>
        {products.map((product: ProductType) => {
          return <Product key={product.id} product={product} />;
        })}
      </StoreContainer>
    </Fragment>
  );
};

export default Store;
