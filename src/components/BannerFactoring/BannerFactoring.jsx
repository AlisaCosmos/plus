import './BannerFactoring.scss';
import ButtonRequest from '../ButtonRequest/ButtonRequest';

function BannerFactoring({handleRequestModal}) {
  return (
    <div className="bannerFactoring container">
      <div className="bannerFactoring__inner container__row container__row_wide">
        <div className="bannerFactoring__box">
          <div className="bannerFactoring__box__header">ФАКТОРИНГ ДЛЯ ПОСТАВЩИКОВ
            <div>И ПОКУПАТЕЛЕЙ</div>
          </div>
          <ButtonRequest handleRequestModal={handleRequestModal}/>
        </div>
      </div>
    </div>
  )
}

export default BannerFactoring;
