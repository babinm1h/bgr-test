import { Card, CircularProgress } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useGetNewsItemQuery } from "../../../redux/services/news/newsApi";
import { APP_ROUTES } from "../../../types/constants/routes";
import { formatDate } from "../../../utils/date";
import Loader from "../../UI/Loader/Loader";
import st from "./styles.module.scss";

interface IProps {
  id: number;
}

const NewsItem = React.memo(({ id }: IProps) => {
  // т.к HackerNews Api возвращает массив из 100 ID, приходится делать 100 запросов за каждой из новостей
  const { data, isLoading } = useGetNewsItemQuery(id);

  return (
    <NavLink to={APP_ROUTES.NEWS_ITEM + `/${id}`}>
      <Card variant="elevation" className={st.card}>
        <div className={st.content}>
          {isLoading || !data ? (
            <Loader />
          ) : (
            <>
              <div>{data.title}</div>
              <div>Rating: {data.score}</div>
              <div>Author: {data.by}</div>
              <div>Date: {formatDate(data.time)}</div>
            </>
          )}
        </div>
      </Card>
    </NavLink>
  );
});

export default NewsItem;
