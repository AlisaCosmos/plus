import './ButtonCalculateModal.scss';
import * as cx from "classnames";
import { useState, useEffect } from "react";
import { ReactComponent as Arrow } from "../../assets/imgs/arrow_for_button_calc.svg";

function ButtonCalculateModal({ isModal, handleCalculationModal, handleLoading, handleSendCalculation, isSending }) {
  const [isActive, setIsActive] = useState(false);
  const [focusIcon, setFocusIcon] = useState(false);

  const classButton = cx("buttonCalculateModal btn_full", {
    "buttonCalculateModal_modal": isModal,
    "buttonCalculateModal_market": isModal === false,
    "buttonCalculateModal_focus": focusIcon,
  });

  const classButtonInner = cx("buttonCalculateModal__inner", {
    "buttonCalculateModal__innerActive": isActive,
  });

  useEffect(() => {
    if (isSending === true) {
      setIsActive(true);
      setTimeout(() => {
        handleCalculationModal();
        handleLoading();
        setIsActive(false);
      }, 350)
    } else return
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSending])

  return (
    <button className={classButton} onClick={handleSendCalculation}
      onFocus={() => setFocusIcon((focusIcon) => !focusIcon)}
      onBlur={() => setFocusIcon((focusIcon) => !focusIcon)}>
      <div className={classButtonInner}>
        Рассчитать стоимость
        <div className="buttonCalculateModal__arrowWrapper">
          <Arrow className="buttonCalculateModal__arrow" />
        </div>
      </div>
    </button>
  )
}

export default ButtonCalculateModal;
