import { DocumentsContextProvider } from "@context/DocumentsContext/DocumentsContextProvider";

import { DocumentsList } from "./DocumentsList/DocumentsList";
import { DocumentsForm } from "./DocumentsForm/DocumentsForm";
import { DocumentsHeader } from "./DocumentsHeader/DocumentsHeader";

export const Documents = () => {
  return (
    <DocumentsContextProvider>
      <DocumentsHeader />
      <div className="flex items-stretch h-full">
        <DocumentsList />
        <DocumentsForm />
      </div>
    </DocumentsContextProvider>
  );
};
