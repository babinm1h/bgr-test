import { IComment } from "../../../types/entities/comment";
import { INewsItem } from "../../../types/entities/news";
import { apiSlice } from "../apiSlice";

export const newsApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query<number[], void>({
      query: () => ({
        url: "/newstories.json",
        params: { print: "pretty", limitToFirst: 100, orderBy: JSON.stringify("$key") },
      }),
    }),

    getNewsItem: build.query<INewsItem, number>({
      query: (id) => ({
        url: `/item/${id}.json`,
        params: { print: "pretty" },
      }),
    }),

    getNewsItemComments: build.query<IComment, number>({
      query: (id) => ({
        url: `/item/${id}.json`,
        params: { print: "pretty" },
      }),
    }),
  }),
});

export const {
  useGetNewsItemQuery,
  useGetNewsQuery,
  useLazyGetNewsQuery,
  useLazyGetNewsItemQuery,
  useGetNewsItemCommentsQuery,
  useLazyGetNewsItemCommentsQuery,
} = newsApi;
