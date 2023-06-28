import { useState, useEffect, useRef } from 'react';
import useMountTransition from "../../hooks/useMountTransition";
import useWindowDimensions from '../../hooks/useWindowDimensions';
import cn from "classnames";
import './FaqItem.scss';
import ArrowMore from "../../assets/imgs/arrow-more.svg";
import ArrowLess from "../../assets/imgs/arrow-less.svg";

function FaqItem({ id, question, answer }) {
  const [show, setShow] = useState(false);
  const hasTransitionedIn = useMountTransition(show, 400);
  const answerRef = useRef();
  const [heightAnswer, setHeightAnswer] = useState();
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;

  const answerStyles = {
    height: show ? heightAnswer : 0,
  };

  const getAnswerSize = () => {
    const newHeight = answerRef.current.clientHeight;
    setHeightAnswer(newHeight);
  };

  useEffect(() => {
    getAnswerSize();
  }, [show]);

  useEffect(() => {
    setTimeout(() => {
      getAnswerSize();
    }, 400);
  }, [width]);

  useEffect(() => {
    getAnswerSize();
  }, [isPortrait]);

  return (
    <div className="faqItem">
      <div className={cn("faqItem__question", { "faqItem__question_smaller": show === true })} onClick={() => setShow(!show)}>
        <div className="faqItem__question__title">{question}</div>
        <button className="faqItem__question__btn" onClick={() => setShow(!show)}>
          <img src={show ? ArrowLess : ArrowMore} alt="Показать" />
        </button>
      </div>
      <div className={cn("faqItem__answerLine", { "faqItem__answerLastopen": (show && id === "deposit") })} id={id} style={answerStyles} >
        <div className={cn({ "faqItem__answer": (hasTransitionedIn || show) }, `faqItem__answerTransition ${hasTransitionedIn && "in"} ${show && "visible"}`)} ref={answerRef}>
          {(hasTransitionedIn || show) && answer}
        </div>
      </div>
    </div >
  )
}

export default FaqItem;
