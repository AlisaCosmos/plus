import './ProgressBar.scss';
import * as cx from "classnames";

const ProgressBar = (props) => {
  let {
    size = 138,
    progress = 0,
    trackWidth = 15,
    trackColor = `#EEEEEE`,
    indicatorWidth = 15,
    indicatorColor = `#FF7A00`,
    indicatorCap = `butt`,
    label = `Loading...`,
    labelColor = `#FF7A00`,
    spinnerMode = false,
    spinnerSpeed = 1,
    isModal = false,
  } = props;

  const center = size / 2,
    radius =
      center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((100 - progress) / 100);

  let hideLabel = size < 100 || !label.length || spinnerMode ? true : false;

  const classLabel = cx("svg-pi-label__progress", {
    "svg-pi-label__progress_market": isModal === false,
  });

  return (
    <>
      <div className="svg-pi-wrapper" style={{ width: size, height: size }}>
        <svg className="svg-pi" style={{ width: size, height: size }}>
          <circle
            className="svg-pi-track"
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={trackColor}
            strokeWidth={trackWidth}
          />
          <circle
            className={`svg-pi-indicator ${spinnerMode ? "svg-pi-indicator--spinner" : ""
              }`}
            style={{ animationDuration: spinnerSpeed * 1000 }}
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={indicatorColor}
            strokeWidth={indicatorWidth}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            strokeLinecap={indicatorCap}
          />
        </svg>

        {!hideLabel && (
          <div className="svg-pi-label" style={{ color: labelColor }}>
            {/* <span className="svg-pi-label__loading">{label}</span> */}

            {!spinnerMode && (
              <span className={classLabel}>
                {`${progress > 100 ? 100 : progress}%`}
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ProgressBar;
