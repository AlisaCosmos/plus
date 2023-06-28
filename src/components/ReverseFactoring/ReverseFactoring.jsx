import './ReverseFactoring.scss';
import * as cx from "classnames";
import { reverseFactoringItems } from "./reverseFactoringItems";

import { ReactComponent as Users } from "../../assets/imgs/reverseFactoring_users.svg";
import { ReactComponent as Shop } from "../../assets/imgs/reverseFactoring_shop.svg";
import { ReactComponent as UsdCircle } from "../../assets/imgs/reverseFactoring_usdCircle.svg";
import { ReactComponent as Comment } from "../../assets/imgs/reverseFactoring_comment.svg";

function ReverseFactoring() {

  const renderImg = (curID) => {
    switch (curID) {
      case "users":
        return (<Users className="reverseFactoring__oneCard_img" />)
      case "shop":
        return (<Shop className="reverseFactoring__oneCard_img" />)
      case "usdCircle":
        return (<UsdCircle className="reverseFactoring__oneCard_img" />)
      case "comment":
        return (<Comment className="reverseFactoring__oneCard_img" />)
    }
  }

  return (
    <section className="reverseFactoring container">
      <div className="reverseFactoring__inner container__row">
        <h1 className="reverseFactoring__header">Реверсивный факторинг</h1>
        <div className="reverseFactoring__cards">
          {reverseFactoringItems.map((item) => (
            <div className={cx("reverseFactoring__oneCard", (item.id === "usdCircle") && "reverseFactoring__oneCard_accent")} key={item.id} id={item.id}>
              <div className="reverseFactoring__oneCard_imgWrapper">
                {renderImg(item.id)}
              </div>
              <div className="reverseFactoring__oneCard_description">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReverseFactoring;
