import Image from "next/image";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Product as ProductType } from "../types/Product";
import Button from "./Button";

const Container = styled.section`
  ${tw`w-full h-auto p-4 flex flex-col items-center  bg-white border-black border-4 border-solid`}
  
  & h2{
    ${tw`[letter-spacing: -0.125rem]`}
  }
  
  & p{
    ${tw`text-gray`}
  }

  & a{
    ${tw`[text-decoration-line: underline] pt-2.5`}
  }

  *{
    ${tw`space-y-2.5`}
  }
`;

const ProductImage = styled(Image)``;

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Container>
      <Image src={product.image} alt={product.name} width={250} height={150} />
      <h2>{product.name}</h2>
      <h3>${product.price}.00</h3>
      <p>{product.description}</p>
      <Button>Add to Cart</Button>
      <a href="#!">Learn More</a>
    </Container>
  );
};

export default Product;
