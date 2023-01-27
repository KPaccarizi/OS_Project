import { Button } from "@components/shared/Button/Button";
import { FileType } from "@context/DocumentsContext/DocumentsContext";

interface Props {
  onAddNew: (type: FileType) => void;
}

export const AddNewDocument = (props: Props) => {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-y-3">
      <Button color="secondary" onClick={() => props.onAddNew("folder")}>
        Add New Folder
      </Button>
      <span>or</span>
      <Button color="secondary" onClick={() => props.onAddNew("file")}>
        Add New File
      </Button>
    </div>
  );
};
