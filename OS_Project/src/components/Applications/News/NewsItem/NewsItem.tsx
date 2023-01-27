import { News } from "@api/news/news";

export const NewsItem = ({ name, email, body }: News) => {
  return (
    <div className="w-full flex flex-col items-start p-4 border-2 rounded-lg shadow-md">
      <h4 className="text-xl font-bold">{name}</h4>
      <span>{email}</span>
      <p className="text-base mt-4">{body}</p>
    </div>
  );
};
