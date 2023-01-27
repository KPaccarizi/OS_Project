import { useState } from "react";

import { Input } from "@components/shared/Input/Input";
import { Button } from "@components/shared/Button/Button";

export const Browser = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    window.open(`https://google.com/search?q=${search}`, "_blank");
    setSearch("");
  };

  return (
    <div className="flex flex-col items-center pt-[15%] w-full h-full">
      <h4 className="font-bold text-5xl mb-6">Google</h4>
      <Input
        type="text"
        value={search}
        className="min-w-[600px] p-2 mb-4"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};
