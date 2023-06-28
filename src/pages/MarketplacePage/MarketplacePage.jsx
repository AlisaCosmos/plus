import './MarketplacePage.scss';
import TakeAsMuch from "../../components/TakeAsMuch/TakeAsMuch";
import FirstScreen from "../../components/FirstScreen/FirstScreen";
import HowReceiveMoney from "../../components/HowReceiveMoney/HowReceiveMoney";
import PersonalContact from '../../components/PersonalContact/PersonalContact';
import Calculator from '../../components/Calculator/Calculator';
import Faq from '../../components/Faq/Faq';
import BannerFactoring from '../../components/BannerFactoring/BannerFactoring';

const MarketplacePage = ({ handleRequestModal }) => (
  <div className="marketplacePage">
    <FirstScreen
      page="market"
      description="Получайте финансирование и развивайте бизнес на Wildberries, Ozon и других площадках"
      buttonRequest={true}
      buttonCalculate={false}
      handleRequestModal={handleRequestModal}>
      Деньги <br />
      на развитие бизнеса <br />
      на маркетплейсах
    </FirstScreen>
    {/* <section className="marketplacePage__calculator container">
      <div className="marketplacePage__calculatorInner container__row">
        <Calculator isModal={false} handleRequestModal={handleRequestModal} />
      </div>
    </section> */}
    <HowReceiveMoney />
    <TakeAsMuch handleRequestModal={handleRequestModal} />
    <PersonalContact handleRequestModal={handleRequestModal} />
    <Faq />
    <BannerFactoring handleRequestModal={handleRequestModal} />
  </div>
);

export default MarketplacePage;
