import "./RequestInput.scss";
import * as cx from "classnames";

function RequestInput({
  type,
  name,
  id,
  value,
  errorMessage,
  blurHandler,
  handleChange,
  isDirty,
}) {
  const classInput = cx("requestInput__input", {
    requestInput__input_error: errorMessage && isDirty,
  });
  return (
    <div className="requestInput">
      <label className="requestInput__label" htmlFor={id}>
        {name}
      </label>
      {errorMessage && isDirty && (
        <div className="requestInput__error">{errorMessage}</div>
      )}

      <input
        className={classInput}
        onChange={(e) => handleChange(e, id)}
        value={value}
        type={type}
        name={type}
        onBlur={() => blurHandler(id)}
        inputMode={id === 'inn' ? "numeric" : ""}
        autoComplete="on"
      />
    </div>
  );
}

export default RequestInput;
