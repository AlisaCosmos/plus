import "./CostOfFactoring.scss";

function CostOfFactoring({ id }) {
  return (
    <section className="costOfFactoring container" id={id}>
      <div className="costOfFactoring__inner">
        <div className="costOfFactoring__question">
          <div>
            <h1 className="costOfFactoring__header">
              Из чего складывается стоимость факторинга?
            </h1>
            <div className="costOfFactoring__description">
              Стоимость факторинга - это размер комиссии, которая удерживается
              фактором из финансирования каждой поставки либо оплачивается по
              выставленным фактором счетам с определенной периодичностью,
              например, раз в месяц.
              <div className="costOfFactoring__description_list">
                Комиссия в факторинге может состоять из:
                <ul>
                  <li>Стоимости услуг фактора</li>
                  <li>Стоимости денежных средств на единицу времени</li>
                  <li>Затрат на документооборот</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="costOfFactoring__types">
          <div className="container__row">
            <div className="costOfFactoring__types_leftSide">
              <div className="costOfFactoring__types_title">Факторинг без регресса</div>
              <div className="bubles">
                <div className="oneBuble oneBuble__first">Финансирование до 100% от суммы поставки</div>
                <div className="connectionBox"></div>
                <div className="oneBuble oneBuble__center">Возможность предоставления дебитору дополнительной отсрочки платежа</div>
                <div className="connectionBox"></div>
                <div className="oneBuble oneBuble__last">Риск неплатежа А+ факторинг принимает на себя</div>
              </div>
            </div>
            <div className="costOfFactoring__types_rightSide">
              <div className="costOfFactoring__types_title">Факторинг с регрессом</div>
              <div className="bubles">
                <div className="oneBuble oneBuble__first">Финансирование до 90% от суммы поставки</div>
                <div className="connectionBox"></div>
                <div className="oneBuble oneBuble__center">Получение финансирования на срок равный или превышающий срок отсрочки платежа</div>
                <div className="connectionBox"></div>
                <div className="oneBuble oneBuble__last">Дополнительный период ожидания к отсрочке платежа</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CostOfFactoring;
