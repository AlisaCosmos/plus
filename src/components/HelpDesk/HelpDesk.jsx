import "./HelpDesk.scss";
// import * as cx from "classnames";
import HelpInput from "../HelpInput/HelpInput";
import { helpFields } from "./helpFields";
import { Link } from "react-router-dom";
import { ReactComponent as AlertIcon } from "../../assets/imgs/alert_icon.svg";
import { initialState } from "./initialState";
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import ButtonSend from "../ButtonSend/ButtonSend";
import { useState, useEffect } from "react";

export default function HelpModal({ handleModal }) {
  const [state, setState] = useState(initialState);
  const [phoneValue, setPhoneValue] = useState('');
  const [valid, setValid] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e, id) => {
    // const value = e.target.value.trimStart().replace(/ +/g, " ");

    if (id === 'helpInn') {
      const result = e.target.value.replace(/\D/g, '');
      setState({
        ...state,
        [id]: {
          ...state[id],
          value: result
        }
      });
    } else {
      setState({
        ...state,
        [id]: {
          ...state[id],
          value: e.target.value
        }
      });
    }
  };

  const blurHandler = (type) => {
    setState((state) => ({
      ...state,
      [type]: {
        ...state[type],
        isDirty: true
      }
    }));
    validateForm();
  }

  const handleClick = () => {
    let curValidSend = validateForm();

    for (let key in state) { // проходим по стейту и отмечаем isDirty, чтобы отобразилась ошибка у всех
      setState((state) => ({
        ...state,
        [key]: {
          ...state[key],
          isDirty: true
        }
      }));
    }

    if (curValidSend === true) {
      setSending(true);
    } else {
      setSending(false);
    }
  };

  const clearInputsForm = () => {
    /* console.log(`Фамилия: ${state.helpSurname.value.trimStart().replace(/ +/g, " ")},
              Имя: ${state.helpName.value.trimStart().replace(/ +/g, " ")},
              Отчество: ${state.helpMiddle.value.trimStart().replace(/ +/g, " ")},
              Название компании:${state.helpInn.value.trimStart().replace(/ +/g, " ")},
              Телефон: ${phoneValue.trimStart().replace(/ +/g, " ")},
              Почта: ${state.helpEmail.value.trimStart().replace(/ +/g, " ")},
              Вопрос: ${state.helpQuestion.value.trimStart().replace(/ +/g, " ")}.`) */

    setState(initialState);
    setPhoneValue('');
    setSending(false);
  }

  const validateForm = () => {
    setValid(true);
    const regName = /^[A-ZА-ЯЁ\s'-]+$/i;
    const regEmail = /^[a-zA-Z0-9.\-_]+@[a-zA-Z0-9.\-_]+\.[a-zA-Z]{2,63}$/;
    const regEmailFirstSign = /^[a-zA-Z0-9]/;
    const serchPunycode = /\b@xn--\b/giu;
    //const regNumber = /^\d+$/;

    for (const field of helpFields) {
      const { rule, id } = field;
      const value = state[id].value.trim();
      let error;

      switch (rule) {
        case 'name':
          if (value.length === 0) {
            error = 'Необходимо заполнить';
            setValid(false);
            break;
          }
          if (!regName.test(value)) {
            error = 'Недопустимые символы';
            setValid(false);
            break;
          }
          if (value.length > 200) {
            error = 'Максимум 200 символов';
            setValid(false);
            break;
          }
          break;
        case 'middle':
          if (value.length !== 0 && !regName.test(value)) {
            error = 'Недопустимые символы';
            setValid(false);
            break;
          }
          if (value.length !== 0 && value.length > 200) {
            error = 'Максимум 200 символов';
            setValid(false);
            break;
          }
          break;
        case 'inn':
          if (value.length === 0) {
            error = 'Необходимо заполнить';
            setValid(false);
            break;
          }
          /* if (!regNumber.test(value)) {
            error = 'Недопустимый формат';
            setValid(false);
            break;
          } */
          if ((value.length !== 10) && (value.length !== 12)) {
            error = 'ИНН должен содержать 10 или 12 цифр';
            setValid(false);
            break;
          }
          break;
        case 'phone':
          if ((phoneValue === undefined) || (phoneValue.length === 0)) {
            error = 'Необходимо заполнить';
            setValid(false);
            break;
          }
          if (!isPossiblePhoneNumber(phoneValue)) {
            error = 'Недопустимая длина';
            setValid(false);
            break;
          }
          break;
        case 'email':
          if (value.length === 0) {
            error = 'Необходимо заполнить';
            setValid(false);
            break;
          }
          if (!regEmailFirstSign.test(Array.from(value)[0])) {
            error = 'Недопустимый формат';
            setValid(false);
            break;
          }
          if (serchPunycode.test(value)) {
            error = "Недопустимый формат";
            setValid(false);
            break;
          }
          if (!regEmail.test(value)) {
            error = 'Недопустимый формат';
            setValid(false);
            break;
          }
          if (value.length < 5) {
            error = 'Минимум 5 символов';
            setValid(false);
            break;
          }
          if (value.length > 200) {
            error = 'Максимум 200 символов';
            setValid(false);
            break;
          }
          break;
        case 'question':
          if (value.length === 0) {
            error = 'Необходимо заполнить';
            setValid(false);
            break;
          }
          if (value.length > 5000) {
            error = 'Максимум 5000 символов';
            setValid(false);
            break;
          }
          break;
        default:
          error = '';
      }

      setState((state) => ({
        ...state,
        [id]: {
          ...state[id],
          error: error ? error : ''
        }
      }));
    }
    return valid
  }

  // ОТПРАВКА ФОРМЫ 
  useEffect(() => {
    if (sending === true) {
      sendData();
    }

    // eslint-disable-next-line
  }, [sending])

  const sendData = () => {
    const URL = process.env.REACT_APP_API_SUPPORT;
    const data = {
      inn: state.helpInn.value.trimStart().replace(/ +/g, " "),
      email: state.helpEmail.value.trimStart().replace(/ +/g, " "),
      mobileNumber: phoneValue.trimStart().replace(/ +/g, " "),
      name: state.helpName.value.trimStart().replace(/ +/g, " "),
      patronymic: state.helpMiddle.value.trimStart().replace(/ +/g, " "),
      question: state.helpQuestion.value.trimStart().replace(/ +/g, " "),
      surname: state.helpSurname.value.trimStart().replace(/ +/g, " ")
    }

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        INN: data.inn,
        email: data.email,
        mobile_number: data.mobileNumber,
        name: data.name,
        patronymic: data.patronymic,
        question: data.question,
        surname: data.surname
      }),
      mode: 'cors',
    })
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log(e))
  }

  return (
    <div className="help">
      <div className="help__rows">
        {helpFields.map((item) => (
          <HelpInput
            key={item.id}
            id={item.id}
            name={item.name}
            label={item.label}
            value={state[item.id].value}
            type={item.type}
            view={item.view}
            blurHandler={blurHandler}
            phoneValue={phoneValue}
            handlePhoneValue={setPhoneValue}
            handleChange={handleChange}
            handleClick={handleClick}
            errorMessage={state[item.id].error}
            isDirty={state[item.id].isDirty}
          />
        ))}
      </div>
      <div className="help__footer">
        <div className="help__helper"></div>
        <div className="help__alertAndButton">
          <div className="help__alert">
            <div className="help__alertWrapper">
              <AlertIcon className="help__alertIcon" />
            </div>
            <span>
              Нажимая «Отправить», вы даете{" "}
              <Link
                to="/agreement" target="_blank"
                className="help__agreement">
                согласие на обработку персональных данных
              </Link>
            </span>
          </div>
          <ButtonSend capitalLetters={true} handleSendForm={handleClick} isSending={sending}
            clearInputsForm={clearInputsForm} handleModal={handleModal} isModal="help">ОТПРАВИТЬ</ButtonSend>
        </div>
      </div>
    </div>
  );
}