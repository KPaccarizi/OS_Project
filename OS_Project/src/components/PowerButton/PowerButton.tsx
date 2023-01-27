import { useState } from "react";

import { useAuthContext } from "@context/AuthContext/AuthContext";

import { Icon } from "@components/shared/Icon/Icon";
import { DefaultModal } from "@components/shared/Modal/DefaultModal/DefaultModal";

export const PowerButton = () => {
  const { user, logOut } = useAuthContext();
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handlePowerOff = () => {
    window.close();
  };

  const handleLogOut = () => {
    setIsVisible(false);
    logOut();
  };

  return (
    <>
      <div
        onClick={handleOpen}
        className="w-[60px] h-[60px] bg-primary fixed bottom-4 left-4 flex items-center justify-center rounded-full cursor-pointer shadow-md"
      >
        <Icon icon="power-off" className="w-6" />
      </div>
      <DefaultModal isVisible={isVisible} onClose={handleClose}>
        <div className="flex flex-col gap-y-4">
          <div
            onClick={handlePowerOff}
            className="flex items-center p-3 min-w-[200px] rounded-xl bg-slate-300 cursor-pointer"
          >
            <Icon icon="power-off" className="w-5 mr-2" />
            <span>Power Off</span>
          </div>
          {user && (
            <div
              onClick={handleLogOut}
              className="flex items-center p-3 min-w-[200px] rounded-xl bg-slate-300 cursor-pointer"
            >
              <Icon icon="log-out" className="w-5 mr-2" />
              <span>Log Out</span>
            </div>
          )}
          <div
            onClick={handleClose}
            className="flex items-center p-3 min-w-[200px] rounded-xl bg-slate-300 cursor-pointer"
          >
            <span>Cancel</span>
          </div>
        </div>
      </DefaultModal>
    </>
  );
};
