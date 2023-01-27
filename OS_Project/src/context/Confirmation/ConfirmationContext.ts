import React, { useContext } from "react";
import { ConfirmationModalOptions } from "./ConfirmationContextProvider";

export type ConfirmationActionType = "confirm" | "cancel";

export interface ConfirmationContextType {
  isOpen: boolean;
  confirm: (
    options: ConfirmationModalOptions
  ) => Promise<ConfirmationActionType>;
}

const values: ConfirmationContextType = {
  isOpen: false,
  confirm: async () => "cancel",
};

export const ConfirmationContext =
  React.createContext<ConfirmationContextType>(values);

export const useConfirmation = () => {
  if (!ConfirmationContext) {
    throw new Error(
      "useConfirmation should be used inside of ConfirmationContext!"
    );
  }

  return useContext(ConfirmationContext);
};
