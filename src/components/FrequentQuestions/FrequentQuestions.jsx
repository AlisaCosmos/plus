import './FrequentQuestions.scss';
import { frequentquastionItems } from './frequentquastionItems';
import FrequentQuestionsItem from '../FrequentQuestionsItem/FrequentQuestionsItem';

function FrequentQuestions() {
  return (
    <div className="frequentQuestions container">
      <div className="frequentQuestions__inner container__row">
        <h1 className="frequentQuestions__header">Частые вопросы про факторинг</h1>
        <div className="frequentQuestions__items">
          {frequentquastionItems.map((item) => (
            <FrequentQuestionsItem
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

export default FrequentQuestions;
