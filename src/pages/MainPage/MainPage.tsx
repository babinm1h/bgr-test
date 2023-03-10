import { Button } from "@mui/material";
import React from "react";
import Layout from "../../components/Layout/Layout";
import NewsList from "../../components/NewsList/NewsList";
import { useGetNewsQuery } from "../../redux/services/news/newsApi";

const MainPage = () => {
  const { isLoading, data = [], refetch, isFetching } = useGetNewsQuery(null as any, { pollingInterval: 1000 * 60 });

  return (
    <Layout>
      <div>
        <Button variant="contained" onClick={refetch}>
          Refetch news
        </Button>
      </div>
      <NewsList newsIds={data} isLoading={isLoading || isFetching} />
    </Layout>
  );
};

export default MainPage;
