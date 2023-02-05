import Image from "next/image";
import React, { useState } from "react";
import { useProductContext } from "../contexts/ProductsContext";
import { Product as ProductType } from "../types/Product";
import Button from "./Button";
import { Container, ProductDescription, ProductEdit, ProductInput, ProductInputLabel, ProductPrice, ProductTitle } from "./Product.styles";
interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { changeProductName, changeProductQuantity } = useProductContext();
  const [fontSize, setFontSize] = useState(0);

  const productNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeProductName(product.id, event.target.value);
  };

  const productQuantiyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const MAX_QUANTITY_ALLOWED = 100;
    const quantity = Number(event.target.value);
    if (quantity > MAX_QUANTITY_ALLOWED) {
      changeProductQuantity(product.id, MAX_QUANTITY_ALLOWED);
      return;
    }
    changeProductQuantity(product.id, quantity);
  };

  const fontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(Number(event.target.value));
  };

  return (
    <Container>
      <Image src={product.image} alt={product.name} width={250} height={150} />
      <ProductTitle fontSize={fontSize}>{product.name}</ProductTitle>
      <ProductPrice>
        <h3>${product.price}.00</h3>
        <input
          type="number"
          name={`product-quantity-${product.id}`}
          id={`product-quantity-${product.id}`}
          min="0"
          max="100"
          value={product.quantity}
          onChange={productQuantiyChange}
        />
      </ProductPrice>
      <ProductEdit>
        <ProductInputLabel htmlFor={`product-name-${product.id}`}>
          Change Product Title
        </ProductInputLabel>
        <ProductInput
          type="text"
          name={`product-name-${product.id}`}
          id={`product-name-${product.id}`}
          value={product.name}
          onChange={productNameChange}
        />
        <br />
        <ProductInputLabel htmlFor={`product-font-size-${product.id}`}>
          Change Title Font Size
        </ProductInputLabel>
        <ProductInput
          type="range"
          min="-24"
          name={`product-font-size-${product.id}`}
          id={`product-font-size-${product.id}`}
          value={fontSize}
          onChange={fontSizeChange}
        />
      </ProductEdit>
      <ProductDescription>{product.description}</ProductDescription>
      <Button>Add to Cart</Button>
      <a href="#!">Learn More</a>
    </Container>
  );
};

export default Product;
