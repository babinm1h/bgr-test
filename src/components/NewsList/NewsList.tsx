import { CircularProgress } from "@mui/material";
import React from "react";
import { INewsItem } from "../../types/entities/news";
import Loader from "../UI/Loader/Loader";
import NewsItem from "./NewsItem/NewsItem";
import st from "./styles.module.scss";

interface IProps {
  newsIds: number[];
  isLoading: boolean;
}

const NewsList = React.memo(({ newsIds, isLoading }: IProps) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={st.list}>
      {newsIds.map((id) => (
        <NewsItem key={id} id={id} />
      ))}
    </div>
  );
});

export default NewsList;
