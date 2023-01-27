import { useEffect, useState } from "react";

const getLatestTime = () => {
  return new Date()
    .toLocaleString("en-US", {
      hour12: false,
    })
    .replace(", ", " - ");
};

export const CurrentTime = () => {
  const [date, setDate] = useState(() => getLatestTime());

  useEffect(() => {
    const updateDate = () => setDate(getLatestTime());

    const timeInterval = setInterval(updateDate, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return <span className="text-xs font-bold cursor-pointer">{date}</span>;
};
