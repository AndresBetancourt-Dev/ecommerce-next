import styled from "styled-components";
import tw from "twin.macro";

export const StoreContainer = styled.section`
  ${tw`p-8 w-full grid items-center justify-items-center gap-2.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
`;

export const StoreTitle = styled.h1`
  ${tw`text-6xl text-center`}
`;

export const StoreCart = styled.div`
  ${tw`flex gap-2 w-32 [margin: 0 auto] md:absolute top-5 right-5 shadow-amber-50 shadow-md h-auto`}
`;

export const StoreCartValue = styled.div`
  ${tw`flex w-auto font-bold text-2xl items-center justify-center`}
`;
