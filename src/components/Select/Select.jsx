import './Select.scss';
import * as cx from "classnames";
import { ReactComponent as ArrowMore } from "../../assets/imgs/arrow-more-calc.svg";
import { ReactComponent as ArrowLess } from "../../assets/imgs/arrow-less-calc.svg";

function Select({ isModal, handleChange, firstValue, secondValue, value, name, question, firstOption, secondOption, showSelect, handleSelect, removeError }) {

  const classSelect = cx("select", {
    "select_modal": isModal,
    "select_market": isModal === false,
    "select_showOptions": showSelect,
    "select_showOptionsFirst": showSelect && (name === "responsible"),
  });

  const handleSelectOption = () => {
    setTimeout(() => {
      handleSelect();
      removeError();
    }, 100)
  }

  return (
    <div className={classSelect} id={name}>
      {(value === "" || showSelect === true) ?
        <div>
          <button className="select__questionBtn" onClick={handleSelect}>
            <div className="select__questionBtnTitle">{question}</div>
            <div className="select__questionBtnArrowWrapper">
              {showSelect ? <ArrowLess className="select__questionBtnArrow" />
                : <ArrowMore className="select__questionBtnArrow" />}
            </div>
          </button>
          {showSelect &&
            <div className="select__options">
              <div className="select__optionsRadio select__optionsRadioFirst">
                <input type="radio" name={name}
                  className="select__optionsRadioInput"
                  id={firstValue}
                  value={firstValue}
                  checked={value === firstValue ? true : false}
                  onChange={handleChange}
                  onClick={handleSelectOption} />
                <label htmlFor={firstValue} className="select__optionsText">{firstOption}</label>
              </div>
              <div className="select__optionsRadio select__optionsRadioSecond">
                <input type="radio" name={name}
                  className="select__optionsRadioInput"
                  id={secondValue}
                  value={secondValue}
                  checked={value === secondValue ? true : false}
                  onChange={handleChange}
                  onClick={handleSelectOption} />
                <label htmlFor={secondValue} className="select__optionsText">{secondOption}</label>
              </div>
            </div>}
        </div> :
        <div>
          {value === firstValue ?
            <div className="select__optionsRadio select__optionsRadioFirst select__optionsCurrent">
              <input type="radio" name={name}
                className="select__optionsRadioInput"
                id={firstValue}
                value={firstValue}
                checked={value === firstValue ? true : false}
                onChange={handleChange}
                onClick={handleSelectOption} />
              <label htmlFor={firstValue} className="select__optionsText">{firstOption}</label>
            </div> :
            <div className="select__optionsRadio select__optionsRadioSecond select__optionsCurrent">
              <input type="radio" name={name}
                className="select__optionsRadioInput"
                id={secondValue}
                value={secondValue}
                checked={value === secondValue ? true : false}
                onChange={handleChange}
                onClick={handleSelectOption} />
              <label htmlFor={secondValue} className="select__optionsText">{secondOption}</label>
            </div>}
        </div>}
    </div >
  )
}

export default Select;
