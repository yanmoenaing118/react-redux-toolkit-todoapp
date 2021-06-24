import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ open, children }) => {
  let classes = [styles.Modal];
  if (!open) {
    classes = [styles.Modal, styles.ModalClose];
  }
  return <div className={`${classes.join(" ")}`}>{children}</div>;
};

export default Modal;
