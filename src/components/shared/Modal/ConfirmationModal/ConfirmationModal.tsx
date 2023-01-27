import { Dialog } from "@headlessui/react";

import { Button } from "@components/shared/Button/Button";
import { ConfirmationModalState } from "@context/Confirmation/ConfirmationContextProvider";

export const ConfirmationModal = ({
  title,
  isOpen,
  onCancel,
  onConfirm,
  description,
}: ConfirmationModalState) => {
  return (
    <Dialog open={isOpen} onClose={() => onCancel()}>
      <div
        className="fixed inset-0 bg-dark opacity-30 z-40"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
        <Dialog.Panel className="mx-auto max-w-sm rounded-[10px] bg-white">
          <Dialog.Title className="bg-blue text-white px-[30px] py-[10px] text-center text-[1.15rem] rounded-t-[10px]">
            {title}
          </Dialog.Title>

          <div className="px-[30px]">
            <Dialog.Description className="py-[20px] text-center text-[1rem] text-dark-light">
              {description}
            </Dialog.Description>
            <div className="py-[15px] flex justify-center gap-[20px]">
              <Button
                className="bg-blue text-white"
                onClick={() => onConfirm()}
              >
                Confirm
              </Button>
              <Button
                className="bg-grey-darker text-white"
                onClick={() => onCancel()}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
