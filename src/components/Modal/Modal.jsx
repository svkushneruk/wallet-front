import css from './Modal.module.css';

const Modal = children => {
  return (
    <div className={css.modalBackdrop}>
      <div className={css.modalContent}>{children}</div>
    </div>
  );
};

export default Modal;
