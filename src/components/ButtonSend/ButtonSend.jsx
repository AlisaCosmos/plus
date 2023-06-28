import "./ButtonSend.scss";
import * as cx from "classnames";
import { ReactComponent as Arrow } from "../../assets/imgs/arrow_for_button.svg";
import { ReactComponent as Check } from "../../assets/imgs/send_check.svg";
import { useState, useEffect } from "react";
import useWindowDimensions from '../../hooks/useWindowDimensions';

function ButtonSend({ handleSendForm, isSending, clearInputsForm, handleModal, children, capitalLetters, isModal }) {
  const [arrowMove, setArrowMove] = useState(false);
  const [checkVisible, setCheckVisible] = useState(false);
  const [focusIcon, setFocusIcon] = useState(false);
  const { width } = useWindowDimensions();

  const classBtn = cx("buttonSend btn btn_full", {
    "btn__helpmodal": isModal === "help",
    "btn__requestmodal": isModal === "request",
    "buttonSend__helpmodal_focus": focusIcon && (isModal === "help"),
    "buttonSend__requestmodal_focus": focusIcon && (isModal === "request"),
  });

  const classArrowWrapper = cx("buttonSend__arrowWrapper", {
    buttonSend__arrowWrapper_active: arrowMove,
  });

  const classArrow = cx("buttonSend__arrow", {
    buttonSend__arrow_active: arrowMove,
    buttonSend__arrow_bigger: capitalLetters,
  });

  const classCheckWrapper = cx("buttonSend__checkWrapper", {
    buttonSend__checkWrapper_active: checkVisible,
    buttonSend__checkWrapper_bigger: capitalLetters,
  });

  const classText = cx("buttonSend__sendedText", {
    buttonSend__sendedText_capital: capitalLetters,
  });

  const handleAnimation = () => {
    setArrowMove(true);

    if (width < 960) {
      setCheckVisible(true);
      clearInputsForm();
    } else {
      setTimeout(() => {
        setCheckVisible(true);
        clearInputsForm();
      }, 500);
    }

    setTimeout(() => {
      handleModal();
      setArrowMove(false);
      setCheckVisible(false);
    }, 1500);
  }

  useEffect(() => {
    if (isSending === true) {
      handleAnimation();
      //sendData(values);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSending])

  return (
    <button className={classBtn} onClick={() => handleSendForm()}
      onFocus={() => setFocusIcon((focusIcon) => !focusIcon)}
      onBlur={() => setFocusIcon((focusIcon) => !focusIcon)}>
      <div className="buttonSend__inner">
        {arrowMove ? <div className={classText}>Отправлено</div> : children}
        {(width > 959 && checkVisible === false) && <div className={classArrowWrapper}>
          <Arrow className={classArrow} />
        </div>}
        <div className={classCheckWrapper}>
          <Check className="buttonSend__check" />
        </div>
      </div>
    </button>
  );
}

export default ButtonSend;
