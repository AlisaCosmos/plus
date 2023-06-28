import "./Step.scss";
import * as cx from "classnames";

function Step({ text, number, highlight, page }) {
  const classStep = cx("step", {
    "step_highlight": highlight,
    "step_home": (page === 'home'),
    "step_market": (page === 'market'),
  });

  return (
      <div className={classStep}>
          <div className="step__number">{number}</div>
          <div className="step__header">{text}</div>
      </div>
  );
}

export default Step;
