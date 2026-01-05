import { useState } from "react";
import { ModalContext } from "./modalContext";

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};
