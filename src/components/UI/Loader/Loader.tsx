import { CircularProgress } from "@mui/material";
import React from "react";
import st from "./styles.module.scss";

const Loader = () => {
  return (
    <div className={st.loader}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
