import './TakeAsMuch.scss';
import { businessItems } from './businessItems';
import TakeAsMuchItem from '../TakeAsMuchItem/TakeAsMuchItem';

function TakeAsMuch({ handleRequestModal }) {
  return (
    <div className="takeAsMuch container">
      <div className="takeAsMuch__inner container__row">
        <h1 className="takeAsMuch__header">Берите столько, сколько нужно вашему бизнесу</h1>
        <div className="takeAsMuch__items">
          {businessItems.map((item) => (
            <TakeAsMuchItem
              key={item.id}
              id={item.id}
              title={item.title}
              solution={item.solution}
              rate={item.rate}
              experience={item.experience}
              turnover={item.turnover}
              warehouse={item.warehouse}
              documents={item.documents}
              handleRequestModal={handleRequestModal}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TakeAsMuch;
