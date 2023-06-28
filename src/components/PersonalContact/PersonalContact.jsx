import './PersonalContact.scss';
import ButtonRequest from '../ButtonRequest/ButtonRequest';
import ChatManager from "../../assets/imgs/chat_manager_women.jpeg";
import ChatClient from "../../assets/imgs/chat_borrower.jpeg";

function PersonalContact({ handleRequestModal }) {
  return (
    <div className="personalContact container">
      <div className="personalContact__inner container__row">
        <div className="personalContact__chat">
          <img src={ChatManager} alt="Менеджер" className="personalContact__chat__manager_img" />
          <div className="personalContact__chat__manager__first">Мария, мы пересмотрели лимит по Вашему покупателю</div>
          <div className="personalContact__chat__manager__second">И увеличили лимит на 10 млн рублей!</div>
          <div className="personalContact__chat__client">Оперативно, спасибо!</div>
          <img src={ChatClient} alt="Менеджер" className="personalContact__chat__client_img" />
        </div>
        <div className="personalContact__info">
          <h1 className="personalContact__info__title">Личный контакт с менеджером</h1>
          <div className="personalContact__info__subtitle">Наши менеджеры отлично разбираются в продукте и обязательно помогут вам!</div>
          <ButtonRequest handleRequestModal={handleRequestModal} />
        </div>
      </div>
    </div>
  )
}

export default PersonalContact;
