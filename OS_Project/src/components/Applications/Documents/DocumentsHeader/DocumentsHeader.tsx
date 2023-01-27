import { useState } from "react";

import { Icon } from "@components/shared/Icon/Icon";
import { Input } from "@components/shared/Input/Input";
import { useDocumentsContext } from "@context/DocumentsContext/DocumentsContext";

export const DocumentsHeader = () => {
  const { selectedId, onPrevious } = useDocumentsContext();
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="w-full flex items-center px-3 gap-x-3">
      <Icon
        icon="arrow-left"
        disabled={selectedId === null}
        className="cursor-pointer w-[15px]"
        onClick={() => {
          if (selectedId) {
            onPrevious(selectedId);
          }
        }}
      />
      <Icon
        disabled={true}
        icon="arrow-right"
        className="cursor-pointer w-[15px]"
      />
      <Input
        type="text"
        value={search}
        onChange={handleChange}
        name="documents-search"
        placeholder="Search Documents"
        className="flex-1 max-w-[400px]"
      />
      <select
        defaultValue=""
        className="rounded-xl py-[2px] pl-3 bg-zinc-100 placeholder-slate-500 border-2 min-w-[200px] border-slate-500 bg-opacity-50 box-border"
      >
        <option value="">Sort By:</option>
        <option value="name">Name</option>
        <option value="type">Type</option>
      </select>
    </div>
  );
};
