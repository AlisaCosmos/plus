import './Contacts.scss';
import { ReactComponent as TelIcon } from "../../assets/imgs/tel_icon.svg"
import { ReactComponent as MailIcon } from "../../assets/imgs/mail_icon.svg"


function Contacts({ id }) {
  return (
    <div className="container" id={id}>
      <div className="contacts container__row">
        <h1 className="contacts__header">Контакты</h1>
        <div className="contacts__content">
          <div className="contacts__contacts">
            <div className="contacts__row">
              <h2 className="contacts__subtitle">Центральный офис</h2>
              <div className="contacts__description">РФ, г. Москва, 123112,<br />Пресненская набережная, д. 12, <br className="contacts__desktop_hidden" />этаж 82, офис 405, <br className="contacts__desktop_hidden" />помещение 3</div>
            </div>
            <div className="contacts__row">
              <h2 className="contacts__subtitle">Для связи</h2>
              <div className="contacts__telAndMail">
                <div className="contacts__linkAndIcon">
                  <TelIcon className="contacts__icon contacts__iconTel" /> <a href="tel:+74954459099" className="contacts__description">+7 (495) 445-90-99</a>
                </div>
                <div className="contacts__linkAndIcon">
                  <MailIcon className="contacts__icon contacts__iconMail" /><a href="mailto:info@fcaplus.ru" className="contacts__description">info@fcaplus.ru</a>
                </div>
              </div>
            </div>
          </div>
          <div className="contacts__mapWrapper">
            <iframe className="contacts__map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.6338454771458!2d37.53905011587424!3d55.74749068055193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bdcef9d88d7%3A0x40c582c3ad3a4bad!2z0JjQvNC_0LXRgNC40Y8sINCf0YDQtdGB0L3QtdC90YHQutCw0Y8g0L3QsNCxLiwgMTIsINCc0L7RgdC60LLQsCwgMTIzMTEy!5e0!3m2!1sru!2sru!4v1678103563569!5m2!1sru!2sru" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
