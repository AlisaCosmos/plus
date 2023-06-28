import './FiveSteps.scss';
import ButtonRequest from '../ButtonRequest/ButtonRequest';
import ButtonCalculate from '../ButtonCalculate/ButtonCalculate';
import Step from '../Step/Step';

function FiveSteps({ handleCalculatorModal, handleRequestModal }) {
  return (
    <section className="fiveSteps container">
      <div className="fiveSteps__inner container__row">
        <h1 className="fiveSteps__header">Получите финансирование за <span className="fiveSteps__number">5</span> шагов</h1>
        <div className="fiveSteps__steps">
          <Step page="home" text="Заполните заявку" number="1" highlight={false} />
          <Step page="home" text="Прикрепитe документы" number="2" highlight={true} />
          <span className="fiveSteps__clearfix_mob"></span>
          <Step page="home" text="Свяжитесь с менеджером" number="3" highlight={false} />
          <span className="fiveSteps__clearfix_tablet"></span>
          <Step page="home" text="Подпишите договор и уведомление дебитора" number="4" highlight={false} />
          <span className="fiveSteps__clearfix_mob"></span>
          <Step page="home" text="Получите финансирование" number="5" highlight={false} />
        </div>
        <div className="fiveSteps__buttons">
          <ButtonRequest handleRequestModal={handleRequestModal} />
          {/* <div className="fiveSteps__buttonCalc">
          <ButtonCalculate handleCalculatorModal={handleCalculatorModal}/>
        </div> */}
        </div>
      </div>
    </section>
  )
};

export default FiveSteps;
