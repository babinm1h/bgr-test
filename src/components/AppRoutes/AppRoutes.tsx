import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import NewsStoryPage from "../../pages/NewsStoryPage/NewsStoryPage";
import { APP_ROUTES } from "../../types/constants/routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={APP_ROUTES.MAIN} element={<MainPage />} />
      <Route path={APP_ROUTES.NEWS_ITEM + "/:id"} element={<NewsStoryPage />} />
    </Routes>
  );
};

export default AppRoutes;
