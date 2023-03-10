import React, { PropsWithChildren } from "react";
import Header from "./Header/Header";
import st from "./styles.module.scss";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={st.layout}>
      <Header />
      <main className={st.main}>{children}</main>
    </div>
  );
};

export default Layout;
