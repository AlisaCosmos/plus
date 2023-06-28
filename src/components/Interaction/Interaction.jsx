import './Interaction.scss';
import SchemeImg from "../../assets/imgs/scheme.jpg"
import SchemeRetinaImg from "../../assets/imgs/scheme_2x.jpg"
import ButtonRequest from '../ButtonRequest/ButtonRequest';
import ButtonCalculate from '../ButtonCalculate/ButtonCalculate';

const Interaction = ({ handleCalculatorModal, handleRequestModal, id }, forwardedRef) => {
  return (
    <div className="interaction container">
      <div className="container__row" id={id}>
        <div className='interaction__inner'>
          <div className="interaction__content">
            <div className="interaction__left">
              <h1 className="interaction__header">Схема<br className="interaction__mobile_hidden" /> взаимодействия</h1>
              <div className="interaction__imgWrapper"><img className="interaction__img" alt="Схема" src={SchemeImg} srcSet={`${SchemeRetinaImg} 2x`} /></div>
            </div>
            <div className="interaction__list">
              <div className="interaction__item">
                <div className="interaction__number">1</div>
                <div className="interaction__description">Поставщик отгружает товары Дебитору на условиях отсрочки платежа в рамках заключенного контракта</div>
              </div>
              <div className="interaction__item">
                <div className="interaction__number">2</div>
                <div className="interaction__description">
                  После поставки товара Поставщик передает в А+ электронный реестр с перечнем поставок и сумм для выплаты финансирования через личный кабинет </div>
              </div>
              <div className="interaction__item">
                <div className="interaction__number">3</div>
                <div className="interaction__description">А+ отправляет в полученный реестр в адрес Дебитора для подтверждения (верификации) действительности переданных поставок</div>
              </div>
              <div className="interaction__item">
                <div className="interaction__number">4</div>
                <div className="interaction__description">А+ выплачивает до 100% от суммы реестра Поставщику</div>
              </div>
              <div className="interaction__item">
                <div className="interaction__number">5</div>
                <div className="interaction__description">После окончания отсрочки платежа по контракту, Дебитор производит оплату в адрес А+ по подтвержденным ранее поставкам от Поставщика</div>
              </div>
              <div className="interaction__item">
                <div className="interaction__number">6</div>
                <div className="interaction__description">А+ переводит Поставщику остаток денежных средств</div>
              </div>
              <div className="interaction__item">
                <div className="interaction__numberWrapper">
                  <div className="interaction__number interaction__number_grey">!</div>
                </div>
                <div className="interaction__description">В случае, если Дебитор не оплачивает задолженность, А+ направляет поставщику требование погасить задолженность</div>
              </div>
            </div>
          </div>
          <div className="interaction__buttons">
            <ButtonRequest handleRequestModal={handleRequestModal} />
            {/* <div className="interaction__buttonCalc">
              <ButtonCalculate handleCalculatorModal={handleCalculatorModal} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Interaction;
