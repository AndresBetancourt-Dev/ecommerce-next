import styled from "styled-components";
import tw from "twin.macro";
import { Input } from "./Input.styles";

export const Container = styled.section`
  ${tw`w-full h-auto p-4 flex flex-col items-center overflow-scroll bg-white border-black border-4 border-solid`}

  & h2 {
    ${tw`h-auto [letter-spacing: -0.125rem]`}
  }

  & a {
    ${tw`[text-decoration-line: underline] pt-2.5`}
  }
`;

export const PRODUCT_TITLE_START_FONT_SIZE = 24;
export const ProductTitle = styled.h2<{ fontSize: number }>`
  font-size: ${(props) => PRODUCT_TITLE_START_FONT_SIZE + props.fontSize}px;
`;

export const ProductPrice = styled.div`
  ${tw`w-full flex items-center h-auto gap-2`}

  & input {
    ${Input}
    ${tw`w-10 h-6`}
  }
`;

export const ProductEdit = styled.div`
  ${tw`w-full flex flex-col`}
`;

export const ProductInput = styled.input`
  ${Input}
`;

export const ProductInputLabel = styled.label`
  ${tw`font-black w-full`}
`;

export const ProductDescription = styled.p`
  ${tw`text-gray`}
`;
