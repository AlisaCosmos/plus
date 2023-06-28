import './Faq.scss';
import { quastionItems } from './quastionItems';
import FaqItem from '../FaqItem/FaqItem';

function Faq() {
  return (
    <div className="faq container">
      <div className="faq__inner container__row">
        <h1 className="faq__header">Вопросы и ответы</h1>
        <div className="faq__items">
          {quastionItems.map((item) => (
            <FaqItem
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq;
