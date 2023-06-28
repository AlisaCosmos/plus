import './OneCasePage.scss';
import * as cx from "classnames";
import { cases } from './cases';
import BannerFactoring from '../../components/BannerFactoring/BannerFactoring';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import fruitdelivery from '../../assets/imgs/fruit-delivery.jpg';
import fruitdeliveryRetina from '../../assets/imgs/fruit-delivery_2x.jpg';
import fruitdeliveryTablet from '../../assets/imgs/fruit-delivery-tablet.jpg';
import fruitdeliveryTabletRetina from '../../assets/imgs/fruit-delivery-tablet_2x.jpg';
import fruitdeliveryMobile from '../../assets/imgs/fruit-delivery-mobile.jpg';
import fruitdeliveryMobileRetina from '../../assets/imgs/fruit-delivery-mobile_2x.jpg';

import seafooddelivery from '../../assets/imgs/seafood-delivery.jpg';
import seafooddeliveryRetina from '../../assets/imgs/seafood-delivery_2x.jpg';
import seafooddeliveryTablet from '../../assets/imgs/seafood-delivery-tablet.jpg';
import seafooddeliveryTabletRetina from '../../assets/imgs/seafood-delivery-tablet_2x.jpg';
import seafooddeliveryMobile from '../../assets/imgs/seafood-delivery-mobile.jpg';
import seafooddeliveryMobileRetina from '../../assets/imgs/seafood-delivery-mobile_2x.jpg';

import softwaredevelopment from '../../assets/imgs/software-development.jpg';
import softwaredevelopmentRetina from '../../assets/imgs/software-development_2x.jpg';
import softwaredevelopmentTablet from '../../assets/imgs/software-development-tablet.jpg';
import softwaredevelopmentTabletRetina from '../../assets/imgs/software-development-tablet_2x.jpg';
import softwaredevelopmentMobile from '../../assets/imgs/software-development-mobile.jpg';
import softwaredevelopmentMobileRetina from '../../assets/imgs/software-development-mobile_2x.jpg';

import itoutsourcing from '../../assets/imgs/it-outsourcing.jpg';
import itoutsourcingRetina from '../../assets/imgs/it-outsourcing_2x.jpg';
import itoutsourcingTablet from '../../assets/imgs/it-outsourcing.jpg';
import itoutsourcingTabletRetina from '../../assets/imgs/it-outsourcing_2x.jpg';
import itoutsourcingMobile from '../../assets/imgs/it-outsourcing.jpg';
import itoutsourcingMobileRetina from '../../assets/imgs/it-outsourcing_2x.jpg';

function OneCasePage(props) {
  const currentCase = cases.find((item) => (item.id === props.case));
  const { width } = useWindowDimensions();

  const renderImg = () => {
    if ((width >= 959)) {
      if (currentCase.id === "fruitdelivery") {
        return (
          <img className="main__schemeImg" alt="Схема"
            src={fruitdelivery} srcSet={`${fruitdeliveryRetina} 2x`} />)
      }
      else if (currentCase.id === "seafooddelivery") {
        return (<img className="main__schemeImg" alt="Схема"
          src={seafooddelivery} srcSet={`${seafooddeliveryRetina} 2x`} />)
      }
      else if (currentCase.id === "softwaredevelopment") {
        return (<img className="main__schemeImg" alt="Схема"
          src={softwaredevelopment} srcSet={`${softwaredevelopmentRetina} 2x`} />)
      }
      else if (currentCase.id === "itoutsourcing") {
        return (<img className="main__schemeImg" alt="Схема"
          src={itoutsourcing} srcSet={`${itoutsourcingRetina} 2x`} />)
      }
    }
    else if ((width < 959) && (width > 480)) {
      if (currentCase.id === "fruitdelivery") {
        return (
          <img className="main__schemeImg" alt="Схема"
            src={fruitdeliveryTablet} srcSet={`${fruitdeliveryTabletRetina} 2x`} />)
      }
      else if (currentCase.id === "seafooddelivery") {
        return (<img className="main__schemeImg" alt="Схема"
          src={seafooddeliveryTablet} srcSet={`${seafooddeliveryTabletRetina} 2x`} />)
      }
      else if (currentCase.id === "softwaredevelopment") {
        return (<img className="main__schemeImg" alt="Схема"
          src={softwaredevelopmentTablet} srcSet={`${softwaredevelopmentTabletRetina} 2x`} />)
      }
      else if (currentCase.id === "itoutsourcing") {
        return (<img className="main__schemeImg" alt="Схема"
          src={itoutsourcingTablet} srcSet={`${itoutsourcingTabletRetina} 2x`} />)
      }
    }
    else {
      if (currentCase.id === "fruitdelivery") {
        return (
          <img className="main__schemeImg" alt="Схема"
            src={fruitdeliveryMobile} srcSet={`${fruitdeliveryMobileRetina} 2x`} />)
      }
      else if (currentCase.id === "seafooddelivery") {
        return (<img className="main__schemeImg" alt="Схема"
          src={seafooddeliveryMobile} srcSet={`${seafooddeliveryMobileRetina} 2x`} />)
      }
      else if (currentCase.id === "softwaredevelopment") {
        return (<img className="main__schemeImg" alt="Схема"
          src={softwaredevelopmentMobile} srcSet={`${softwaredevelopmentMobileRetina} 2x`} />)
      }
      else if (currentCase.id === "itoutsourcing") {
        return (<img className="main__schemeImg" alt="Схема"
          src={itoutsourcingMobile} srcSet={`${itoutsourcingMobileRetina} 2x`} />)
      }
    }
  }

  return (
    <div className="oneCasePage">
      <div className="container">
        <div className="oneCasePage__inner container__row">
          {currentCase && (
            <div className="oneCasePage__item">
              <h1>{currentCase.title}</h1>
              <div className="oneCasePage__itemSubtitle">{currentCase.subtitle}</div>
              <div className="main">
                <div className="main__scheme" id={currentCase.id}>
                  {renderImg()}
                </div>
                <div className="main__steps">
                  <div>
                    <div className="main__stepsTitle">Проблема:</div>
                    <div className="main__stepsMainText">{currentCase.problem}</div>
                  </div>
                  <div>
                    <div className="main__stepsTitle">Решение: </div>
                    <div className="main__stepsMainText">{currentCase.decision}</div>
                  </div>
                  <div>
                    <div className="main__stepsTitle">Итог:</div>
                    <div className="main__stepsMainText">{currentCase.result}</div>
                  </div>
                </div>
              </div>
              <div className="oneCasePage__itemAccentSubtitle">Преимущества факторинга</div>
              <div className="advantages">
                <div className="advantages__firstContainer">
                  <div className={cx("advantages__firstContainerText", (currentCase.id === "softwaredevelopment" || currentCase.id === "itoutsourcing") && "advantages__containerText")}>
                    {currentCase.firstadvantage}
                  </div>
                </div>
                <div className="advantages__secondContainer">
                  <div className={cx("advantages__secondContainerText", (currentCase.id === "softwaredevelopment" || currentCase.id === "itoutsourcing") && "advantages__containerText")}>
                    {currentCase.secondadvantage}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <BannerFactoring handleRequestModal={props.handleRequestModal} />
    </div>
  )
}

export default OneCasePage;
