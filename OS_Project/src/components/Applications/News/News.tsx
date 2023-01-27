import { useQuery } from "react-query";

import { getNews } from "@api/news/news.client";

import { NewsItem } from "./NewsItem/NewsItem";
import { HandleRequestState } from "@components/shared/HandleRequestState/HandleRequestState";

export const News = () => {
  const { isLoading, isError, data } = useQuery("news", getNews);

  return (
    <div className="flex-1 flex flex-col px-6 overflow-y-auto max-h-full">
      <h1 className="text-left w-full font-bold text-4xl">News</h1>
      <div className="mt-6 flex flex-col gap-y-3 flex-1 pb-8">
        <HandleRequestState state={isLoading} placeholder={<p>Loading...</p>}>
          <HandleRequestState
            state={isError}
            placeholder={<p>News couldn't be loaded, please try again!</p>}
          >
            {data?.map((news) => (
              <NewsItem key={`${news.id}`} {...news} />
            ))}
          </HandleRequestState>
        </HandleRequestState>
      </div>
    </div>
  );
};
