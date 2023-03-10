import st from "./styles.module.scss";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLazyGetNewsItemQuery } from "../../redux/services/news/newsApi";
import { INewsItem } from "../../types/entities/news";
import { Button, CircularProgress } from "@mui/material";
import { formatDate } from "../../utils/date";
import CommentsList from "./CommentsList/CommentsList";
import { APP_ROUTES } from "../../types/constants/routes";
import Loader from "../UI/Loader/Loader";

const NewsStory = () => {
  const id = useParams().id;
  const nav = useNavigate();
  const [item, setItem] = useState<null | INewsItem>(null);
  const [fetchNewsItem, { isLoading, isFetching }] = useLazyGetNewsItemQuery();

  const handleFetchItem = useCallback(
    async (id?: string) => {
      try {
        if (!id) return;
        const data = await fetchNewsItem(+id).unwrap();
        setItem(data);
      } catch (err) {
        console.log(err);
      }
    },
    [fetchNewsItem, setItem],
  );

  const handleGoHome = () => {
    nav(APP_ROUTES.MAIN);
  };

  useEffect(() => {
    if (id) {
      handleFetchItem(id);
    }
  }, [id]);

  if (isLoading || isFetching || !item) {
    return <Loader />;
  }

  return (
    <div className={st.wrapper}>
      <div className={st.buttons}>
        <Button variant="contained" onClick={() => handleFetchItem(id)}>
          Refetch
        </Button>
        <Button variant="contained" onClick={handleGoHome}>
          Back to news
        </Button>
      </div>

      <div className={st.info}>
        <div className={st.infoItem}>
          <span className={st.infoItemTitle}>URL:</span>
          <a href={item.url} target="_blank" rel="noreferer">
            Click to open
          </a>
        </div>
        <div className={st.infoItem}>
          <span className={st.infoItemTitle}>Title:</span>
          {item.title}
        </div>
        <div className={st.infoItem}>
          <span className={st.infoItemTitle}>Date:</span>
          {formatDate(item.time || 0)}
        </div>
        <div className={st.infoItem}>
          <span className={st.infoItemTitle}>Author:</span>
          {item.by}
        </div>
        <div className={st.infoItem}>
          <span className={st.infoItemTitle}>Comments:</span>
          {item.kids ? item.kids.length : 0}
        </div>
      </div>

      {item.kids?.length ? <CommentsList commentIds={item.kids} /> : null}
    </div>
  );
};

export default NewsStory;
