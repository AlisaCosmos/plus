import './Request.scss';
// import * as cx from "classnames";
import ButtonSend from '../ButtonSend/ButtonSend';
import RequestInput from '../RequestInput/RequestInput';
import { requestFields } from './requestFields';
import { ReactComponent as CheckboxMark } from "../../assets/imgs/checkbox_mark.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { initialState } from "./initialState";

function Request({ handleModal }) {
  const [valid, setValid] = useState(false);
  const [sending, setSending] = useState(false);
  const [agreeToAllTerms, setAgreeToAllTerms] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [checkboxClick, setcheckboxClick] = useState(+0);
  const [state, setState] = useState({
    surname: {
      value: '',
      isDirty: false,
      error: ''
    },
    name: {
      value: '',
      isDirty: false,
      error: ''
    },
    middle: {
      value: '',
      isDirty: false,
      error: ''
    },
    email: {
      value: '',
      isDirty: false,
      error: ''
    },
    inn: {
      value: '',
      isDirty: false,
      error: ''
    }
  });
  //const { surname, name, middle, email, inn } = state;

  useEffect(() => {
    if (agreeToAllTerms === false && checkboxClick !== 0) {
      setCheckboxError(true);
    } else {
      setCheckboxError(false);
    }
  }, [agreeToAllTerms, checkboxClick])

  const handleChange = (e, id) => {
    // let value = e.target.value.trimStart().replace(/ +/g, " ");

    if (id === 'inn') {
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
    if (type !== 'checkbox') {
      setState((state) => ({
        ...state,
        [type]: {
          ...state[type],
          isDirty: true
        }
      }));
    }
    validateForm();
  }

  const handleSendForm = () => {
    setcheckboxClick((prev) => ++prev);
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
    /* console.log(`Фамилия: ${surname.value.trim()},
  Имя: ${name.value.trim()},
  Отчество: ${middle.value.trim()},
  Email:${email.value.trim()},
  ИНН: ${inn.value.trim()}`) */

    setState(initialState); // возвращаем состояние к началу - почему не возвращается?
    setAgreeToAllTerms(false);
    setcheckboxClick(+0);
    setSending(false);
  }

  const validateForm = () => {
    setValid(true);
    const regName = /^[A-ZА-ЯЁ\s'-]+$/i;
    const regEmail = /^[a-zA-Z0-9.\-_]+@[a-zA-Z0-9.\-_]+\.[a-zA-Z]{2,63}$/;
    const regEmailFirstSign = /^[a-zA-Z0-9]/;
    const serchPunycode = /\b@xn--\b/giu;
    //const regNumber = /^\d+$/;

    if (agreeToAllTerms === false) {
      setValid(false);
    }

    for (const field of requestFields) {
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
    const URL = process.env.REACT_APP_API_APPLICATION;
    const data = {
      inn: state["inn"].value.trimStart().replace(/ +/g, " "),
      email: state["email"].value.trimStart().replace(/ +/g, " "),
      name: state["name"].value.trimStart().replace(/ +/g, " "),
      patronymic: state["middle"].value.trimStart().replace(/ +/g, " "),
      surname: state["surname"].value.trimStart().replace(/ +/g, " ")
    }

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        INN: data.inn,
        email: data.email,
        name: data.name,
        patronymic: data.patronymic,
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
    <div className="request">
      <h1 className="request__header">Заявка на факторинг</h1>
      <div className="request__form">
        <div className="request__inputsWrapper">
          {requestFields.map((field) => (
            <RequestInput
              key={field.id}
              id={field.id}
              name={field.name}
              type={field.type}
              value={state[field.id].value}
              blurHandler={blurHandler}
              handleChange={handleChange}
              errorMessage={state[field.id].error}
              isDirty={state[field.id].isDirty}
            />
          ))}
        </div>

        <div className="request__checkbox checkbox">
          <div>
            <input className="checkbox__input" id="requestCheckbox" type="checkbox"
              checked={agreeToAllTerms}
              onChange={() => setAgreeToAllTerms((curr) => !curr)}
              onBlur={() => blurHandler('checkbox')} />
            <label className="checkbox__label" htmlFor="requestCheckbox">
              <CheckboxMark className="checkbox__mark" />
              <div className="checkbox__text">Принимаю условия <Link to="/agreement" target="_blank" className="checkbox__link">соглашения об обработке персональных данных</Link></div>
            </label>
          </div>
          {checkboxError && (agreeToAllTerms === false) && (
            <div className="request__checkboxError">Необходимо принять условия</div>
          )}
        </div>
        <div className="request__buttonWrapper">
          <ButtonSend handleSendForm={handleSendForm} isSending={sending}
            clearInputsForm={clearInputsForm} handleModal={handleModal} isModal="request">Отправить заявку</ButtonSend>
        </div>
      </div>
    </div>
  )
}

export default Request;
