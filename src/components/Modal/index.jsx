import './style.scss';

export function Modal({ title, children, footer, open, onClickBackdrop }) {
  if (!open) {
    return null;
  }

  const handleBackdropClick = (event) => {
    if (onClickBackdrop) {
      onClickBackdrop(event);
    }
  }

  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={handleBackdropClick}></div>

      <div className="modal__content">
        <div className="modal__content__header">
          <h2>{title}</h2>
        </div>

        <div className="modal__content__body">
          {children}  
        </div>

        <div className="modal__content__footer">
          {footer}
        </div>
      </div>
    </div>
  );
}
