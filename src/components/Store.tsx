import React, { Dispatch, Fragment, SetStateAction } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Product as ProductType } from "../types/Product";
import Product from "./Product";

const StoreContainer = styled.section`
  ${tw`p-8 w-full grid items-center justify-items-center gap-2.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
`;

const StoreTitle = styled.h1`
  ${tw`text-6xl text-center`}
`

interface StoreProps {
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
}

const Store: React.FC<StoreProps> = ({ products, setProducts }) => {
  console.log(products);
  return (
    <Fragment>
      <StoreTitle>Products</StoreTitle>
      <StoreContainer>
        {products.map((product: ProductType) => {
          return <Product key={product.id} product={product} />;
        })}
      </StoreContainer>
    </Fragment>
  );
};

export default Store;
