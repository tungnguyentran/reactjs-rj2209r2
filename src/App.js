import './App.css';
import React, { useState } from 'react';


const quiz = [
  {
    name: "question_1",
    question: "Hôm nay ăn gì?",
    isMultiChoice: false,
    answers: [
      {
        id: 1,
        content: "Ăn mỳ"
      },
      {
        id: 2,
        content: "Ăn cơm"
      },
      {
        id: 3,
        content: "Ăn bánh mỳ"
      },
      {
        id: 4,
        content: "Ăn sushi"
      },
    ]
  },
  {
    name: "question_2",
    question: "Hôm nay ăn gì?",
    isMultiChoice: true,
    answers: [
      {
        id: 1,
        content: "Ăn mỳ"
      },
      {
        id: 2,
        content: "Ăn cơm"
      },
      {
        id: 3,
        content: "Ăn bánh mỳ"
      },
      {
        id: 4,
        content: "Ăn sushi"
      },
    ]
  }
]

const initState = () => {
  const state = {}
  const errorState = {}
  quiz.forEach(item => {
    let initValue = ''
    if (item.isMultiChoice) {
      initValue = []
    }
    state[item.name] = initValue
    errorState[item.name] = ''
  })
  return {state, errorState}
}

const App = () => {
  const {state, errorState} = initState()
  const [form, setForm] = useState(state)
  const [errorMessage, serErrorMessage] = useState(errorState)
  const handleOnChange = (e) => {
    setForm({...form, [e.target.name]: handleValue(e.target)})
  }

  const handleValue = (targetInput) => {
    if (targetInput.type === "checkbox") {
      if (targetInput.checked) {
        return [...form[targetInput.name], targetInput.value]
      }
      return form[targetInput.name].filter(i => i !== targetInput.value)
    }
    return targetInput.value
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let isValid = true
    for (let key in form) {
      if ((typeof form[key] === 'string' && !form[key]) || (typeof form[key] !== 'string' && !form[key].length)) {
        console.log('inside', key)
        isValid = false
        serErrorMessage({...errorMessage, [key]: 'required'})
      }
    }

    console.log(errorMessage)

    if (!isValid) {
      console.log(isValid)
      return
    }
    // send du lieu len server
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
        <form onSubmit={handleSubmit}>
          {quiz.map(item => inputQuiz(
            handleOnChange, errorMessage[item.name], item))}
          <button className='btn btn-primary' type='submit'>Save</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default App;


const inputQuiz = (handleOnChange, errorMessage, {name, isMultiChoice, question, answers}) => {
  let typeInput = "radio"
  if (isMultiChoice) {
    typeInput = "checkbox"
  }
  return (
    <div key={name}>
      <p>{question}</p>
      <p className='text-danger'>{errorMessage}</p>
      {answers.map((answer, key) => (
        <div className="form-check" key={key}>
          <input className="form-check-input" type={typeInput} name={name} value={answer.id} id={name} onChange={handleOnChange} />
          <label className="form-check-label" htmlFor={name} >
            {answer.content}
          </label>
        </div>
      ))}
      
    </div>
    
  ) 
}


// bài thi cuối kì của sinh viên Bách Khoa
// 20 câu trắc nghiệm và 2 câu lý thuyết và 5 mã đề
// dạng câu hỏi trắc nghiệm sẽ có multiple choices (checkbox) và only choice (radio)


