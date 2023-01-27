import { ReactNode, useState } from "react";

import { ConfirmationModal } from "../../components/shared/Modal/ConfirmationModal/ConfirmationModal";

import {
  ConfirmationContext,
  ConfirmationContextType,
} from "./ConfirmationContext";

interface Props {
  children: ReactNode;
}

type ConfirmationActionType = "confirm" | "cancel";

export interface ConfirmationModalOptions {
  title: string;
  description: string | string[];
}

export interface ConfirmationModalState extends ConfirmationModalOptions {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export const ConfirmationContextProvider = (props: Props) => {
  const [state, setState] = useState<ConfirmationModalState>({
    title: "",
    isOpen: false,
    description: "",
    onCancel: () => {},
    onConfirm: () => {},
  });

  const confirm = ({
    title,
    description,
  }: ConfirmationModalOptions): Promise<ConfirmationActionType> => {
    return new Promise((resolve) => {
      setState((prev) => ({
        title,
        description,
        isOpen: !prev.isOpen,
        onConfirm() {
          setState((prev) => ({
            ...prev,
            isOpen: false,
          }));
          resolve("confirm");
        },
        onCancel() {
          setState((prev) => ({
            ...prev,
            isOpen: false,
          }));
          resolve("cancel");
        },
      }));
    });
  };

  const context: ConfirmationContextType = {
    isOpen: state.isOpen,
    confirm: confirm,
  };

  return (
    <ConfirmationContext.Provider value={context}>
      <ConfirmationModal {...state} />
      {props.children}
    </ConfirmationContext.Provider>
  );
};
