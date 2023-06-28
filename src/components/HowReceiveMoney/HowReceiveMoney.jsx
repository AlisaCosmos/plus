import './HowReceiveMoney.scss';
import Step from '../Step/Step';

function HowReceiveMoney () {
  return (
    <section className="container">
      <div className="howReceiveMoney container__row">
        <h1 className="howReceiveMoney__header">Как получить деньги</h1>
        <div className="howReceiveMoney__steps">
          <div className="howReceiveMoney__twoSteps">
            <Step page="market" text="Оставьте заявку, менеджер свяжется с вами" number="1" highlight={false}/>
            <Step page="market" text="Получите решение" number="2" highlight={true}/>
          </div>
          <div className="howReceiveMoney__twoSteps">
            <Step page="market" text="Подпишите договор онлайн" number="3" highlight={false}/>
            <Step page="market" text="Деньги уже на вашем счёте!" number="4" highlight={false}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowReceiveMoney;
