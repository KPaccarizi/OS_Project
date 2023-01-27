import { useDocumentsContext } from "@context/DocumentsContext/DocumentsContext";

import { HandleRequestState } from "@components/shared/HandleRequestState/HandleRequestState";

import { DocumentsListItem } from "./DocumentsListItem";

export const DocumentsList = () => {
  const { activeList } = useDocumentsContext();

  return (
    <div className="flex-1 h-full pl-3 pt-8 pr-5 box-border">
      <HandleRequestState
        state={activeList === null || activeList.length === 0}
        placeholder={
          <div className="h-full flex items-center justify-center">
            <p className="text-lg font-semibold">
              No documents found, please add them from the sidebar!
            </p>
          </div>
        }
      >
        <div className="grid grid-cols-3 gap-3">
          {activeList?.map((document) => (
            <DocumentsListItem key={document.id} {...document} />
          ))}
        </div>
      </HandleRequestState>
    </div>
  );
};
