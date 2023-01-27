import { createContext, useContext } from "react";

export type FileType = "file" | "folder";

export interface StorageDocument {
  id: string;
  name: string;
  body: string;
  type: FileType;
  parentId: string | null;
}

export interface DocumentsContextValues {
  selectedId: string | null;
  editItem: StorageDocument | null;
  activeList: StorageDocument[] | null;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
  onPrevious: (id: string) => void;
  onCancelEdit: (value: null) => void;
  onEdit: (item: StorageDocument) => void;
  onSubmit: (item: StorageDocument, isEdit: boolean) => void;
}

export const DocumentsContext = createContext<DocumentsContextValues>({
  editItem: null,
  selectedId: null,
  activeList: null,
  onEdit: () => {},
  onSelect: () => {},
  onSubmit: () => {},
  onDelete: () => {},
  onPrevious: () => {},
  onCancelEdit: () => {},
});

export const useDocumentsContext = () => {
  if (!DocumentsContext) {
    throw new Error("useDocumentsContext must be used within DocumentsContext");
  }

  return useContext(DocumentsContext);
};

export const { Provider } = DocumentsContext;
