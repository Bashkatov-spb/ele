import React, { useEffect, useState } from 'react';
import { data } from '../../data/questions';

const Test = () => {

  const [questionNumber, setQuestionNumber] = useState(0);
  const [answersData, setAnswersData] = useState<String[]> ([]);
  const [testIsFinished, setTestIsFinished] = useState<Boolean>(false);
  const { module, question, answers, trueChoice } = data[questionNumber];
  
  useEffect(() => {
    if (answersData.length === data.length - 1) {
      setTestIsFinished(true);
    }
  }, [answersData]);

  const shuffle = (arr: string[]) => {
    return arr.sort(() => Math.random() - 0.5);
  }

  const show = (e: any) => {
    if (data.length > questionNumber + 1) {
      setQuestionNumber((prev) => prev + 1);
      setAnswersData((prev) => [...prev, e.target.value])
    }
  }
  const selectQuestionNumber = (e: any) => {
    setQuestionNumber(e.target.value);
    setTestIsFinished(false);
  }
  const answersList = answers.map((item) => {
    return (
      <button key={item} type="button" onClick={show} value={item} className="test__answer">
        {item}
      </button>
    )
  })
  
  const results = answersData.map((item, idx) => {
    return (
      <button onClick={selectQuestionNumber} key={idx} value={idx} type="button" className={trueChoice === item ? "test__results-btn" : "test__results-btn false"}>{idx + 1}</button>
    )
  })

  const visibleitems = ( 
    <div className="test__container">
      <div className="test__title">{module}</div>
      <div className="test__question">
        <span>{question}</span>
      </div>
      {testIsFinished 
        ? <div className="test__results">{results}</div> 
        : <>
            <div className="test__answers">{answersList}</div>
            {answersData.length === data.length - 1 && <button onClick={() => setTestIsFinished(true)} className="test__go-to-results">Back to results</button>}
          </> 
      }
    </div>
  )

  return (
    <div className="test">
        {visibleitems}
    </div>
  )




}

export default Test