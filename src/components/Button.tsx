import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.button`
    ${tw`bg-primary font-poppins py-1.5 px-4 cursor-pointer`}
`;

const Button: React.FC<PropsWithChildren> = ({children}) => {
  return <Container>{children}</Container>;
};

export default Button;
