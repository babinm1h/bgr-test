import { AppBar } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../../types/constants/routes";
import st from "./styles.module.scss";

const Header = () => {
  return (
    <AppBar className={st.header}>
      <NavLink to={APP_ROUTES.MAIN}>Home</NavLink>
    </AppBar>
  );
};

export default Header;
