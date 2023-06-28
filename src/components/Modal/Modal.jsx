import './Modal.scss';
import * as cx from "classnames";
import { ReactComponent as Close } from "../../assets/imgs/close_icon_black.svg";
import { useScrollController } from "../../hooks/useScrollController";
import ReactFocusLock from 'react-focus-lock';

function Modal({ handleModal, opened, className, children }) {
  useScrollController(opened);

  const classModal = cx("modal", {
    "modal_show": opened,
  });

  const classModalInner = cx(className, "modal__inner", {
    "modal__innerHelp": className === "modal__help",
  });

  if (!opened) {
    return null
  }

  return (
    <div className={classModal}>
      <ReactFocusLock>
        <div className={classModalInner} onClick={e => e.stopPropagation()}>
          {children}
          <button className="modal__closeButton" onClick={handleModal}>
            <Close className="modal__closeIcon" />
          </button>
        </div>
      </ReactFocusLock>
    </div>
  )
};

export default Modal;