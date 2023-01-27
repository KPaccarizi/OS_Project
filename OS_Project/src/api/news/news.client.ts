import { apiRequest } from "../Api";
import { News } from "./news";

export const getNews = () =>
  apiRequest<{}, News[]>({
    url: "comments",
    method: "GET",
    params: {
      _limit: 10,
    },
  }).then((response) => response.data);
