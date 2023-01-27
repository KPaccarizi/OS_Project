import React, { useEffect, useState } from "react";

import {
  FileType,
  useDocumentsContext,
} from "@context/DocumentsContext/DocumentsContext";

import { Button } from "@components/shared/Button/Button";

interface Props {
  type: FileType;
  onCancel: () => void;
  onSubmit: (name: string, body: string) => void;
}

export const AddDocumentForm = ({ type, onCancel, onSubmit }: Props) => {
  const { editItem } = useDocumentsContext();

  const [name, setName] = useState(() => editItem?.name || "");
  const [body, setBody] = useState(() => editItem?.body || "");

  useEffect(() => {
    setName(editItem?.name || "");
    setBody(editItem?.body || "");
  }, [editItem]);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(name, body);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  return (
    <form className="flex flex-col px-9 gap-y-8" onSubmit={handleSubmit}>
      <div className="flex flex-col items-start w-full">
        <label htmlFor="name" className="font-semibold mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          className="p-3 w-full"
          onChange={handleNameChange}
        />
      </div>
      {type === "file" && (
        <div className="flex flex-col items-start w-full">
          <label htmlFor="body" className="font-semibold mb-2">
            Content
          </label>
          <textarea
            id="body"
            name="body"
            value={body}
            onChange={handleBodyChange}
            className="p-3 w-full resize-none h-80"
          />
        </div>
      )}
      <div className="flex gap-x-3">
        <Button
          type="button"
          onClick={onCancel}
          className="flex-1"
          color="secondary"
        >
          Cancel
        </Button>

        <Button type="submit" className="flex-1">
          {!editItem ? "Add" : "Edit"}
        </Button>
      </div>
    </form>
  );
};
