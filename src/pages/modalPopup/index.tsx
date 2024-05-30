import ModalPopup from "@/components/ModalPopUp/ModalPopup";
import styled from "../../components/ModalPopUp/ModalPopup.module.css";
import React, { useEffect, useRef } from "react";
type ModalType = {
  showModalPopUp: boolean;
  modalPopUpCallback: () => void;
};

const Modal = ({ showModalPopUp, modalPopUpCallback }: ModalType) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleOutsideClick = () => {
    modalPopUpCallback();
  };

  useEffect(() => {
    if (showModalPopUp) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    // Cleanup the event listener when the component unmounts or the modal is closed
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModalPopUp, modalPopUpCallback]);
  return (
    showModalPopUp && (
      <div className={styled.modal} ref={modalRef}>
        <ModalPopup modalPopUpCallback={modalPopUpCallback} />
      </div>
    )
  );
};

export default Modal;
