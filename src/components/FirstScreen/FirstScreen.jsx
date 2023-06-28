import './FirstScreen.scss';
import ButtonRequest from '../ButtonRequest/ButtonRequest';
import ButtonCalculate from '../ButtonCalculate/ButtonCalculate';
import * as cx from "classnames";

function FirstScreen({ page, description, children, buttonRequest, buttonCalculate, handleCalculatorModal, handleRequestModal }) {
  const classFirstScreen = cx("container firstScreen", {
    "container firstScreen firstScreen_home": page === 'home',
    "container firstScreen firstScreen_market": page === 'market',
  });

  return (
    <section className={classFirstScreen}>
      <div className="firstScreen__inner container__row">
        <h1 className="firstScreen__header">{children}</h1>
        <p className="firstScreen__description">{description}</p>
        <div className="firstScreen__buttons">
          {buttonRequest &&
            <ButtonRequest handleRequestModal={handleRequestModal} />}
          {/* {buttonCalculate && <div className="firstScreen__buttonCalc" >
            <ButtonCalculate className="firstScreen__buttonCalc" handleCalculatorModal={handleCalculatorModal}/>
          </div>} */}
        </div>
      </div>
    </section>
  )
};

export default FirstScreen;
