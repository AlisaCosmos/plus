import './Advantages.scss';
import { advantagesItems } from "./advantagesItems";

import { ReactComponent as Calendar } from "../../assets/imgs/advantages_calendar.svg";
import { ReactComponent as Chart } from "../../assets/imgs/advantages_chart.svg";
import { ReactComponent as Comment } from "../../assets/imgs/advantages_comment.svg";
import { ReactComponent as UsdCircle } from "../../assets/imgs/advantages_usdCircle.svg";
import { ReactComponent as MapMarker } from "../../assets/imgs/advantages_mapMarker.svg";
import { ReactComponent as Shop } from "../../assets/imgs/advantages_shop.svg";
import { ReactComponent as MoneyCheck } from "../../assets/imgs/advantages_moneyCheck.svg";
import { ReactComponent as Stats } from "../../assets/imgs/advantages_stats.svg";

function Advantages() {

  const renderImg = (curID) => {
    switch (curID) {
      case "calendar":
        return (<Calendar className="advantages__options_boxImg" />)
      case "chart":
        return (<Chart className="advantages__options_boxImg" />)
      case "comment":
        return (<Comment className="advantages__options_boxImg" />)
      case "usdCircle":
        return (<UsdCircle className="advantages__options_boxImg" />)
      case "mapMarker":
        return (<MapMarker className="advantages__options_boxImg" />)
      case "shop":
        return (<Shop className="advantages__options_boxImg" />)
      case "moneyCheck":
        return (<MoneyCheck className="advantages__options_boxImg" />)
      case "stats":
        return (<Stats className="advantages__options_boxImg" />)
    }
  }

  return (
    <section className="advantages container">
      <div className="advantages__inner container__row">
        <h1 className="advantages__header">Преимущества факторинга в А+</h1>
        <div className="advantages__options">
          {advantagesItems.map((item) => (
            <div className="advantages__options_box" key={item.id} id={item.id}>
              <div className="advantages__options_boxImgWrapper">
                {renderImg(item.id)}
              </div>
              <div className="advantages__options_boxDescription">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages;
