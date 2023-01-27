import { StorageDocument } from "../DocumentsContext";

export const getStorageData = () => {
  const storage = localStorage.getItem("documents");

  return storage ? (JSON.parse(storage) as StorageDocument[]) : null;
};

export const addToStorage = (item: StorageDocument) => {
  const storageData = getStorageData();

  const storageValues = storageData === null ? [item] : [...storageData, item];

  localStorage.setItem("documents", JSON.stringify(storageValues));
};

export const editStorage = (item: StorageDocument) => {
  const storageData = getStorageData();

  if (storageData === null) {
    return null;
  }

  const storageValues = storageData.map((el) =>
    el.id === item.id ? item : el
  );

  localStorage.setItem("documents", JSON.stringify(storageValues));
};

export const removeFromStorage = (id: string) => {
  const storageData = getStorageData();

  if (storageData === null) {
    return;
  }

  const storageValues = storageData
    .filter((item) => item.id !== id)
    .filter((item) => item.parentId !== id);

  storageValues.length === 0
    ? localStorage.removeItem("documents")
    : localStorage.setItem("documents", JSON.stringify(storageValues));
};
