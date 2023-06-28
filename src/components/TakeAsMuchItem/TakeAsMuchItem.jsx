import './TakeAsMuchItem.scss';
import ButtonRequest from '../ButtonRequest/ButtonRequest';

function TakeAsMuchItem({ id, title, solution, rate, experience, turnover, warehouse, documents, handleRequestModal }) {
  return (
    <div className="takeAsMuchItem" id={id}>
      <div className="takeAsMuchItem__header">{title}</div>
      <div className="takeAsMuchItem__mainfirst">
        <div>Решение:<span>{solution}</span></div>
        <div>Ставки: {rate}</div>
      </div>
      <div className="takeAsMuchItem__mainsecond">
        <div>Опыт:<span>{experience}</span></div>
        <div>Оборот: {turnover}</div>
        <div>Склад: {warehouse}</div>
        <div>Документы: {documents}</div>
      </div>
      <ButtonRequest size="smallerOnTablet" handleRequestModal={handleRequestModal}/>
    </div>
  )
}

export default TakeAsMuchItem;
