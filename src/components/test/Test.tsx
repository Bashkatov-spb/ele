import React, { useState } from 'react';
import { data } from '../../data/questions';

const Test = () => {

  const [questionNumber, setQuestionNumber] = useState(0);
  const [answersData, setAnswersData] = useState<String[]> ([]);
  const { module, question, answers, trueChoice } = data[questionNumber];

  const arr = [];
  for (let i = 0; i <= 100; i++) {
    arr.push(i);
  }

  const shuffle = (arr: string[]) => {
    return arr.sort(() => Math.random() - 0.5);
  }

  const show = (e: any) => {
    setQuestionNumber((prev) => prev + 1);
    setAnswersData((prev) => [...prev, e.target.value])
    console.log(answersData);
  }

  const answersList = shuffle(answers).map((item) => {
    return (
      <button type="button" onClick={show} key={item} value={item} className="test__answer">
        {item}
      </button>
    )
  })

  return (
    <div className="test">
      <div className="test__container">
        <div className="test__title">{module}</div>
        <div className="test__question">
          <span>{question}</span>
        </div>
        <div className="test__answers">
          {answersList}
        </div>
        {/* <div className="test__results">
          {arr.map((item) => {
            return <button type="button" className="test__results-btn">{item}</button>
          })}
        </div> */}
      </div>
    </div>
  )
}

export default Test