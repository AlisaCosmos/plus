import { useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import './ButtonCalculate.scss';
import * as cx from "classnames";

function ButtonCalculate({ handleCalculatorModal }) {
  const [isActive, setIsActive] = useState(false);
  const [focusIcon, setFocusIcon] = useState(false);
  const { width } = useWindowDimensions();

  const classButton = cx("btn btn_blank buttonCalculate", {
    "buttonCalculate__inactive": isActive === false,
    "buttonCalculate__active": isActive === true,
    "buttonCalculate__focus": focusIcon,
  });

  const handleClick = () => {
    setIsActive(true)
    setTimeout(() => {
      handleCalculatorModal();
      setIsActive(false)
    }, 250)
  }

  return (
    <button className={classButton}
      onClick={(width < 960) ? handleClick : handleCalculatorModal}
      onFocus={() => setFocusIcon((focusIcon) => !focusIcon)}
      onBlur={() => setFocusIcon((focusIcon) => !focusIcon)}>
      Рассчитать стоимость
    </button>
  )
}

export default ButtonCalculate;
