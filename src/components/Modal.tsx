import { IconButton } from "@mui/material";
import MuiModal from "@mui/material/Modal";
import type { JSX } from "react";
import closeIcon from "../assets/close.svg";

type Props = {
  heading: string;
  openModal: { open: boolean; data?: any };
  onClose: () => void;
  children: JSX.Element;
};

const Modal = ({ heading, openModal, onClose, children }: Props) => {
  return (
    <MuiModal
      open={openModal?.open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="w-[70%] max-w-[90%] h-[70%] min-h-[500px] max-h-[90%] min-w-[700px] bg-white rounded-lg overflow-hidden">
        <div className="flex p-4 border-b-[1px] border-gray-300 justify-between items-center">
          <p className="text-xl font-medium">{heading}</p>
          <IconButton onClick={onClose}>
            <img src={closeIcon} alt="" />
          </IconButton>
        </div>
        <div className="h-[calc(100%-65px)]">{children}</div>
      </div>
    </MuiModal>
  );
};

export default Modal;
