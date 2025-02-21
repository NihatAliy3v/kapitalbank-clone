export interface NewsItem {
  id: number;
  day: string;
  content: string;
  month: string;
}

export type NewsData = NewsItem[];
