import { ReactNode } from 'react';

export default function ModalWrapper({
  children,
  title,
  titleAction,
  onClose,
  onClickAction,

}: {
  children: ReactNode;
  title: string,
  titleAction:string,
  onClose: () => void;
  onClickAction: () => void;
}) {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card" style={{ width: '640px', maxWidth: '90%' }}>
        <header className="modal-card-head">
          <p className="modal-card-title is-bold">{title}</p>
          <button className="delete" aria-label="close" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">{children}</section>
        <footer className="modal-card-foot">
          {titleAction && titleAction.trim() !== '' && (
            <div className="buttons">
              <button className="button is-success" onClick={onClickAction}>
                {titleAction}
              </button>
            </div>
          )}
        </footer>
      </div>
    </div>
  );
}
