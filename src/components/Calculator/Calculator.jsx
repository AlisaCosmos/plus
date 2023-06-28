import "./Calculator.scss";
import * as cx from "classnames";
import { useState, useEffect } from "react";
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Range from "../Range/Range";
import Select from "../Select/Select";
import ButtonCalculateModal from "../ButtonCalculateModal/ButtonCalculateModal";
import ButtonRequestCalculator from "../ButtonRequestCalculator/ButtonRequestCalculator";
import ProgressBar from "../ProgressBar/ProgressBar";
import { calculatedData } from "./calculatedData";

function Calculator({ isModal, handleModal, handleRequestModal }) {
  const [delivery, setDelivery] = useState(50000000);
  const [financing, setFinancing] = useState(50000000);
  const [payment, setPayment] = useState(50);
  const [responsible, setResponsible] = useState("");
  const [typeFactoring, setTypeFactoring] = useState("");
  const [showSelectResponsible, setShowSelectResponsible] = useState(false);
  const [showSelectTypeFactoring, setShowSelectTypeFactoring] = useState(false);

  const [sending, setSending] = useState(false);
  const [state, setState] = useState({
    responsible: {
      isDirty: false,
      error: ''
    },
    typeFactoring: {
      isDirty: false,
      error: ''
    }
  });

  const [calculation, setCalculation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const loadingDuration = 3000; // 3 seconds 3000
  const { width, height } = useWindowDimensions();

  const classCalculator = cx("calculator", {
    "calculator_modal": isModal,
    "calculator_market": isModal === false,
  });

  useEffect(() => {
    if (loading === true) {
      let loadingTimeout = setTimeout(() => {
        if (loading >= 100) return;
        setProgress(progress + 1);
      }, loadingDuration / 100);

      if (progress === 100) {
        setLoading(false);
      }

      return () => {
        clearTimeout(loadingTimeout);
      };
    }
  }, [progress, loading]);

  const handleSendCalculation = () => {
    let curValid = validateSelect();
    //console.log(`curValid is ${curValid}`)

    if (curValid === true) {
      setSending(true);
    } else {
      setSending(false);
    }
  };

  const validateSelect = () => {
    if (responsible === "") {
      let error = 'Необходимо заполнить';
      setState((state) => ({
        ...state,
        "responsible": {
          ...state["responsible"],
          error: error,
          isDirty: true
        }
      }));
    } else {
      setState((state) => ({
        ...state,
        "responsible": {
          ...state["responsible"],
          error: '',
          isDirty: false
        }
      }));
    }
    if (typeFactoring === "") {
      let error = 'Необходимо заполнить';
      setState((state) => ({
        ...state,
        "typeFactoring": {
          ...state["typeFactoring"],
          error: error,
          isDirty: true
        }
      }));
    } else {
      setState((state) => ({
        ...state,
        "typeFactoring": {
          ...state["typeFactoring"],
          error: '',
          isDirty: false
        }
      }));
    }

    if (responsible === "" || typeFactoring === "") {
      return false
    } else {
      return true
    }
  }

  const removeErrorResponsible = () => {
    setState((state) => ({
      ...state,
      "responsible": {
        ...state["responsible"],
        error: '',
        isDirty: false
      }
    }));
  }

  const removeErrorTypeFactoring = () => {
    setState((state) => ({
      ...state,
      "typeFactoring": {
        ...state["typeFactoring"],
        error: '',
        isDirty: false
      }
    }));
  }

  return (
    <div className={classCalculator}>
      {calculation === false ?
        <div className="calculator__inputs">
          <h1 className="calculator__header">Калькулятор факторинга</h1>
          <div className="calculator__description">
            Получите предварительный расчет и отправьте заявку
          </div>
          <div className="calculator__main">
            <div className="calculator__rangesBox">
              <div className="calculator__cell">
                <div className="calculator__text">
                  Сумма поставки
                </div>
                <Range
                  isModal={isModal}
                  handleChange={(e) => setDelivery(e.target.value)}
                  value={delivery}
                  text="₽"
                  min={100000}
                  max={100000000}
                  step={10000}
                />
              </div>
              <div className="calculator__cell">
                <div className="calculator__text">
                  Срок оплаты
                </div>
                <Range
                  isModal={isModal}
                  handleChange={(e) => setPayment(e.target.value)}
                  value={payment}
                  text="дн."
                  min={10}
                  max={90}
                  step={5}
                />
              </div>
              <div className="calculator__cell">
                <div className="calculator__text">
                  Сумма финансирования
                </div>
                <Range
                  isModal={isModal}
                  handleChange={(e) => setFinancing(e.target.value)}
                  value={financing}
                  text="₽"
                  min={100000}
                  max={100000000}
                  step={10000}
                />
              </div>
            </div>

            <div className="calculator__selectorBox">
              <div className="calculator__selectResponsible">
                {state["responsible"].error && state["responsible"].isDirty && (
                  <div className="calculator__selectorBox__error">{state["responsible"].error}</div>
                )}
                <Select
                  isModal={isModal}
                  handleChange={(e) => setResponsible(e.target.value)}
                  value={responsible}
                  firstValue="provider"
                  secondValue="buyer"
                  name="responsible"
                  question="Кто отвечает за оплату?"
                  firstOption="Поставщик"
                  secondOption="Покупатель"
                  showSelect={showSelectResponsible}
                  handleSelect={() => setShowSelectResponsible(!showSelectResponsible)}
                  removeError={removeErrorResponsible}
                />
              </div>
              <div className="calculator__selectTypeFactoring">
                {state["typeFactoring"].error && state["typeFactoring"].isDirty && (
                  <div className="calculator__selectorBox__error">{state["typeFactoring"].error}</div>
                )}
                <Select
                  isModal={isModal}
                  handleChange={(e) => setTypeFactoring(e.target.value)}
                  value={typeFactoring}
                  firstValue="withRegression"
                  secondValue="withoutRegression"
                  name="typeFactoring"
                  question="Вид факторинга"
                  firstOption="С регрессом"
                  secondOption="Без регресса"
                  showSelect={showSelectTypeFactoring}
                  handleSelect={() => setShowSelectTypeFactoring(!showSelectTypeFactoring)}
                  removeError={removeErrorTypeFactoring}
                />
              </div>
              <div className="calculator__buttonWrapper">
                <ButtonCalculateModal
                  isModal={isModal}
                  handleCalculationModal={() => setCalculation(true)}
                  handleLoading={() => setLoading(true)}
                  handleSendCalculation={handleSendCalculation}
                  isSending={sending} />
              </div>
            </div>
          </div>
        </div>
        : (calculation === true && loading === true) ?
          <div className="calculator__loadingCalculation">
            {isModal === true ?
              <ProgressBar progress={progress}
                size={((width < 621) || (height < 501)) ? 105 : 138}
                trackWidth={((width < 621) || (height < 501)) ? 10 : 15}
                indicatorWidth={((width < 621) || (height < 501)) ? 10 : 15}
                isModal={isModal} />
              : <ProgressBar progress={progress}
                size={(width < 481) ? 105 : ((width < 1181) || (height < 501)) ? 150 : 250}
                trackWidth={(width < 481) ? 10 : ((width < 1181) || (height < 501)) ? 15 : 25}
                indicatorWidth={(width < 481) ? 10 : ((width < 1181) || (height < 501)) ? 15 : 25}
                isModal={isModal} />}
            <div className="calculator__loadingText">
              Рассчитываем...
            </div>
          </div> :
          <div className="calculator__outputs">
            <h1 className="calculator__header">Калькулятор факторинга</h1>
            <div className="calculator__description">
              Получите предварительный расчет и отправьте заявку
            </div>
            <div className="calculator__mainResults">
              {calculatedData.map((item) => (
                <div key={item.id} id={item.id} className="calculator__mainResultsBox">
                  <div className="calculator__mainResultsLabel">{item.label}</div>
                  <div className="calculator__mainResultsValue">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="calculator__outputsButtonWrapper">
              <ButtonRequestCalculator
                isModal={isModal}
                handleModal={handleModal}
                handleRequestModal={handleRequestModal} />
            </div>
          </div>
      }
    </div>
  );
}

export default Calculator;