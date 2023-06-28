import './CaseBox.scss';
import { Link } from "react-router-dom";

import fruitdelivery from '../../assets/imgs/fruit-delivery_cases.jpg';
import fruitdeliveryRetina from '../../assets/imgs/fruit-delivery_cases_2x.jpg';
import seafooddelivery from '../../assets/imgs/seafood-delivery_cases.jpg';
import seafooddeliveryRetina from '../../assets/imgs/seafood-delivery_cases_2x.jpg';
import softwaredevelopment from '../../assets/imgs/software-development_cases.jpg';
import softwaredevelopmentRetina from '../../assets/imgs/software-development_cases_2x.jpg';
import itoutsourcing from '../../assets/imgs/it-outsourcing_cases.jpg';
import itoutsourcingRetina from '../../assets/imgs/it-outsourcing_cases_2x.jpg';
import { ReactComponent as ArrowIcon } from "../../assets/imgs/arrow_more_cases.svg";

function CaseBox({ id, title, subtitle }) {

  const renderImg = () => {
    if (id === "fruitdelivery") {
      return (
        <img className="caseBox__schemeImg" alt="Схема"
          src={fruitdelivery} srcSet={`${fruitdeliveryRetina} 2x`} />)
    }
    else if (id === "seafooddelivery") {
      return (<img className="caseBox__schemeImg" alt="Схема"
        src={seafooddelivery} srcSet={`${seafooddeliveryRetina} 2x`} />)
    }
    else if (id === "softwaredevelopment") {
      return (<img className="caseBox__schemeImg" alt="Схема"
        src={softwaredevelopment} srcSet={`${softwaredevelopmentRetina} 2x`} />)
    }
    else if (id === "itoutsourcing") {
      return (<img className="caseBox__schemeImg" alt="Схема"
        src={itoutsourcing} srcSet={`${itoutsourcingRetina} 2x`} />)
    }
  }

  return (
    <div className="caseBox" id={id}>
      <div className="caseBox__scheme">{renderImg()}</div>
      <div className="caseBox__text">
        <Link to={id === "fruitdelivery" ? "/case-fruitdelivery"
          : id === "seafooddelivery" ? "/case-seafooddelivery"
            : id === "softwaredevelopment" ? "/case-softwaredevelopment"
              : "/case-itoutsourcing"} className="caseBox__textTitle">{title}</Link>
        <div className="caseBox__textSubtitle">{subtitle}</div>
        <Link to={id === "fruitdelivery" ? "/case-fruitdelivery"
          : id === "seafooddelivery" ? "/case-seafooddelivery"
            : id === "softwaredevelopment" ? "/case-softwaredevelopment"
              : "/case-itoutsourcing"} className="caseBox__link">
          Подробнее
          <ArrowIcon className="caseBox__link_arrowIcon" />
        </Link>
      </div>
    </div>
  )
}

export default CaseBox;
