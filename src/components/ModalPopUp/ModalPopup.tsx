import React from "react";
import styled from "./ModalPopup.module.css";
type ModalContainterType = {
  modalPopUpCallback: () => void;
};

const ModalPopup = ({ modalPopUpCallback }: ModalContainterType) => {
  const closePopup = () => {
    modalPopUpCallback();
  };
  return (
    <div className={styled.modalContainer}>
      <div>Main Content</div>
      <button onClick={closePopup}>Close</button>
    </div>
  );
};

export default ModalPopup;
