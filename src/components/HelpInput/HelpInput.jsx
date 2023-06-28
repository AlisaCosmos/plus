import "./HelpInput.scss";
import * as cx from "classnames";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import ru from 'react-phone-number-input/locale/ru';

export default function HelpInput({
  id,
  name,
  label,
  view,
  type,
  value,
  isDirty,
  handleChange,
  blurHandler,
  errorMessage,
  phoneValue,
  handlePhoneValue
}) {
  const classInput = cx("help__input", {
    "help__input help__input_error": errorMessage && isDirty
  });
  const classLabel = cx("help__label", {
    "help__label_textarea": view === "texterea"
  });

  return (
    <div className="help__row">
      <label className={classLabel} htmlFor={id}>
        {label}
      </label>
      <div className="help__inputWrapper">
        {errorMessage && isDirty && <div className="help__error">{errorMessage}</div>}

        {view === "input" && (
          <input
            className={classInput}
            onBlur={() => blurHandler(id)}
            onChange={(e) => handleChange(e, id)}
            type={type}
            id={id}
            name={name}
            value={value}
            inputMode={id === 'helpInn' ? "numeric" : ""}
            autoComplete="on"
          />
        )}

        {view === "phone" && (
          <PhoneInput
            labels={ru}
            international
            defaultCountry="RU"
            name={name}
            value={phoneValue}
            type={type}
            onBlur={() => blurHandler(id)}
            onChange={handlePhoneValue}
            className={classInput}
            maxLength={25}
            smartCaret={false}
          />)}

        {view === "texterea" && (
          <textarea
            className={classInput}
            onBlur={() => blurHandler(id)}
            onChange={(e) => handleChange(e, id)}
            type={type}
            id={id}
            name={name}
            value={value}
            maxLength={5000}
          />
        )}
      </div>
    </div>
  );
}
