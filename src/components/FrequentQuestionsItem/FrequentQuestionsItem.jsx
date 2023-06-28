import './FrequentQuestionsItem.scss';
import cn from "classnames";

import { useState, useEffect, useRef } from 'react';
import useMountTransition from "../../hooks/useMountTransition";
import useWindowDimensions from '../../hooks/useWindowDimensions';

import { ReactComponent as PolygonMore } from "../../assets/imgs/polygon_more.svg";

function FrequentQuestionsItem({ id, question, answer }) {
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
    <div className="frequentQuestionsItem">
      <div className={cn("frequentQuestionsItem__question", { "frequentQuestionsItem__question_smaller": show === true })} onClick={() => setShow(!show)}>
        <div className="frequentQuestionsItem__question__title">{question}</div>
        <button className="frequentQuestionsItem__question__btn" onClick={() => setShow(!show)}>
          {show ? <PolygonMore className="frequentQuestionsItem__question__polygonRotation" /> : <PolygonMore />}
        </button>
      </div>
      <div id={id} style={answerStyles} >
        <div className={cn({ "frequentQuestionsItem__answer": (hasTransitionedIn || show) }, `frequentQuestionsItem__answerTransition ${hasTransitionedIn && "in"} ${show && "visible"}`)} ref={answerRef}>
          {(hasTransitionedIn || show) && answer}
        </div>
      </div>
    </div >
  )
}

export default FrequentQuestionsItem;
