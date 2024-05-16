import ModalPopup from "@/components/ModalPopUp/ModalPopup";
import styled from "../../components/ModalPopUp/ModalPopup.module.css";
import React from "react";
type ModalType = {
  showModalPopUp: boolean;
  modalPopUpCallback:()=>void;
};

const Modal = ({ showModalPopUp,modalPopUpCallback }: ModalType) => {
  console.log("!@# show", showModalPopUp);
  return (
    showModalPopUp && (
      <div className={styled.modal}>
        <ModalPopup  modalPopUpCallback={modalPopUpCallback} />
      </div>
    )
  );
};

export default Modal;
