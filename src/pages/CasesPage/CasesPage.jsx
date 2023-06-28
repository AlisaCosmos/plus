import './CasesPage.scss';
import { cases } from '../OneCasePage/cases';
import CaseBox from '../../components/CaseBox/CaseBox';

const CasesPage = () => (
  <div className="casesPage container">
    <div className="casesPage__inner container__row">
      <h1 className="casesPage__header">КЕЙСЫ</h1>
      <div className="casesPage__items">
        {cases.map((item) => (
          <CaseBox
            key={item.id}
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </div>
  </div>
);

export default CasesPage;
