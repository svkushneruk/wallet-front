import { createPortal } from 'react-dom';

import css from './Modal.module.css';

const moadalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  return createPortal(
    <div className={css.modalBackdrop}>
      <div className={css.modalContent}>{children}</div>
    </div>,
    moadalRoot
  );
};

export default Modal;
