import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Layout;
