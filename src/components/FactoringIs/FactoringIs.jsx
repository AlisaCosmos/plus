import './FactoringIs.scss';


function FactoringIs({ id }) {
  return (
    <section className="factoring container" id={id}>
      <div className="factoring__row">

        <div className="factoring__inner">
          <div className="factoring__section factoring__section_left">
            <div className="factoring__content factoring__content_left">
              <h1 className="factoring__header">Что такое факторинг?</h1>
              <div className="factoring__subtitleWrapper">
                <h2 className="factoring__subtitle">Факторинг
                  <div className='factoring__tape'></div>
                </h2>
              </div>
              <div className="factoring__description">
                <ul className="factoring__definition">
                  <li className="factoring__text">это комплекс финансовых услуг, включающий в себя финансирование под уступку денежного требования  к дебиторам, управление дебиторской задолженностью, администрирование документооборота, всесторонний анализ потенциальных и действующих контрагентов.</li>
                </ul>
                <p className="factoring__text"><strong className="factoring__text_strong">Использование факторинга</strong> позволит Вашей компании оперативно пополнять оборотный капитал, получая от А+ финансирование в объеме до 100% от суммы денежных требований по поставке.</p>
                <p className="factoring__text">Факторинг <strong className="factoring__description_strong">не требует длительных процедур </strong>оформления залога и дополнительного обеспечения, возникающих при получении кредита. </p>
              </div>
            </div>
          </div>

          <div className="factoring__section factoring__section_right">
            <div className="factoring__content factoring__content_right">
              <div className="factoring__subtitleWrapper factoring__subtitleWrapper_right">
                <h2 className="factoring__subtitle factoring__subtitle_right">Цифровой факторинг
                  <div className='factoring__tape factoring__tape_right'></div>
                </h2>
              </div>
              <div className="factoring__description factoring__description_right">
                <p className="factoring__text">Цифровой маркетинг от А+ - обслуживание контрагентов с применением всестороннего электронного документооборота и ЭЦП, дающее возможность:</p>
                <p className="factoring__text">Для поставщика - без посещения офиса факторинговой компании подавать заявку, предоставлять необходимые документы для получения финансирования, получать необходимые отчеты и закрывающие документы.</p>
                <p className="factoring__text">Для дебитора - получать уведомления об уступке денежнего требования и осуществлять верификацию в режиме on-line.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FactoringIs;
