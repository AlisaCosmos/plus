import './CasesWithDocuments.scss';

import Cases from "../../components/Cases/Cases";
import Documents from "../../components/Documents/Documents";

function CasesWithDocuments() {
  return (
    <div className="container">
      <div className="homePage__casesAndDocuments container__row">
        <div className="homePage__cases">
          <Cases />
        </div>
        <Documents />
      </div>
    </div>
  )
}

export default CasesWithDocuments;
