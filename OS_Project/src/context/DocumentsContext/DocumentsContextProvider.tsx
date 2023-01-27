import { useEffect, useState } from "react";
import {
  StorageDocument,
  DocumentsContext,
  DocumentsContextValues,
} from "./DocumentsContext";
import {
  addToStorage,
  editStorage,
  getStorageData,
  removeFromStorage,
} from "./lib/helpers";

interface Props {
  children: React.ReactNode;
}

export const DocumentsContextProvider = (props: Props) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [editItem, setEditItem] = useState<StorageDocument | null>(null);
  const [activeList, setActiveList] = useState<StorageDocument[] | null>(() => {
    const data = getStorageData();

    return !data ? null : data.filter((item) => item.parentId === null);
  });

  useEffect(() => {
    setActiveList(() => {
      const storageData = getStorageData();

      const newList = storageData?.filter(
        (item) => item.parentId === selectedId
      );

      return newList || null;
    });
  }, [selectedId]);

  const handleEdit = (value: StorageDocument | null) => {
    setEditItem(value);
  };

  const handleSelect = (id: string) => {
    setSelectedId(id);
  };

  const handlePrevious = (id: string) => {
    const storageData = getStorageData();

    const parentFolder = storageData?.find((item) => item.id === id);

    if (parentFolder) {
      setSelectedId(parentFolder.parentId);
    }
  };

  const handleSubmit = (item: StorageDocument, isEdit: boolean) => {
    if (!isEdit) {
      addToStorage(item);
      setActiveList((prev) => (prev === null ? [item] : [...prev, item]));

      return;
    }

    editStorage(item);

    setActiveList((prev) => {
      if (prev === null) {
        return null;
      }

      return prev.map((el) => (el.id === item.id ? item : el));
    });

    setEditItem(null);
  };

  const handleDelete = (id: string) => {
    removeFromStorage(id);

    setActiveList((prev) =>
      prev === null ? null : prev.filter((item) => item.id !== id)
    );
  };

  const context: DocumentsContextValues = {
    editItem,
    selectedId,
    activeList,
    onEdit: handleEdit,
    onSelect: handleSelect,
    onSubmit: handleSubmit,
    onDelete: handleDelete,
    onCancelEdit: handleEdit,
    onPrevious: handlePrevious,
  };

  return (
    <DocumentsContext.Provider value={context}>
      {props.children}
    </DocumentsContext.Provider>
  );
};
