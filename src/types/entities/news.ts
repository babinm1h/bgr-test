export interface INewsItem {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  url: string;
  kids?: number[];
}
