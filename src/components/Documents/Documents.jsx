import './Documents.scss';
import { Link } from "react-router-dom";

function Documents() {
  return (
    <div className="documents">
      <div>
          <h1 className="documents__header">Документы</h1>
      </div>
      <div className="documents__list">
          <Link to="/" className="documents__link">Выписка из ЕГРЮЛ</Link>
          <Link to="/" className="documents__link">Обработка персональных данных</Link>
          <Link to="/" className="documents__link">Выписка из ЕГРЮЛ</Link>
        </div>
    </div>
  );
}

export default Documents;
