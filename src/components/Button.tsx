import React, { PropsWithChildren } from "react";
import { Container } from "./Button.styles";

const Button: React.FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Button;
