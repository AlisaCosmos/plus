import './ButtonRequestCalculator.scss';
import * as cx from "classnames";
import { ReactComponent as Arrow } from "../../assets/imgs/arrow_for_button_calc.svg";
import { useState } from 'react';

function ButtonRequestCalculator({ isModal, handleModal, handleRequestModal }) {
  const [isActive, setIsActive] = useState(false);
  const [focusIcon, setFocusIcon] = useState(false);

  const classButton = cx("buttonRequestCalculator btn_full", {
    "buttonRequestCalculator_modal": isModal,
    "buttonRequestCalculator_market": isModal === false,
    "buttonRequestCalculator_modal__focus": focusIcon && (isModal === true),
    "buttonRequestCalculator_market__focus": focusIcon && (isModal === false),
  });

  const classButtonInner = cx("buttonRequestCalculator__inner", {
    "buttonRequestCalculator__innerActive": isActive,
  });

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => {
      handleModal();
      handleRequestModal();
      setIsActive(false);
    }, 350)
  }

  const handleClickFromMarket = () => {
    setIsActive(true);
    setTimeout(() => {
      handleRequestModal();
      setIsActive(false);
    }, 350)
  }

  return (
    <button className={classButton}
      onClick={isModal === true ? handleClick : handleClickFromMarket}
      onFocus={() => setFocusIcon((focusIcon) => !focusIcon)}
      onBlur={() => setFocusIcon((focusIcon) => !focusIcon)}>
      <div className={classButtonInner}>
        Отправить заявку
        <div className="buttonRequestCalculator__arrowWrapper">
          <Arrow className="buttonRequestCalculator__arrow" />
        </div>
      </div>
    </button>
  )
}

export default ButtonRequestCalculator;
