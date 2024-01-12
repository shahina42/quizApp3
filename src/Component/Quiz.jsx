import React, { useState} from 'react'
import './style.css'
import quizQuestions from '../../resources/quizQuestion.json'
import {Link,useNavigate} from 'react-router-dom'


const Quiz=(props)=> {

  const [ind, setInd] = useState(0);

  const navigate = useNavigate()

  const increment = () => {
    if (ind < 14) {
      setInd((prevInd) => prevInd + 1);
    } else {
      navigate('/result')
    }
  };

  const decrement = () => {
    if (ind <= 0) {
      alert('There are no more previous questions?');
    } else if (ind >= 0) {
      setInd(ind - 1);
    }
  };

  const alertpop = () => {
    alert('Are you sure want to quit?');
    navigate('/')
  };


  const checkOption = (selectedOption) => {
    const correctAnswer = quizQuestions[ind].answer;

    if (selectedOption === correctAnswer) {
        alert('CORRECT ANSWER');
        props.setScore((prevScore) => prevScore + 1);
    } else {
        alert('WRONG ANSWER');
    }
    props.setAttempted((prevValue)=> prevValue+1);
    increment();
};

 
    return (
      <>
         <div className='div2'>
    <div className='pg2'>
        <h2>Question</h2>
      <div className='pg_no'>{[ind+1]} of 15</div>
        <h3>{quizQuestions[ind].question}</h3>
        <div className='buttons'>
        <button className='btn1' onClick={() => checkOption(quizQuestions[ind].optionA)}>{quizQuestions[ind].optionA}</button> <button className='btn2' onClick={() => checkOption(quizQuestions[ind].optionB)} >{quizQuestions[ind].optionB}</button>
           <button className='btn3'  onClick={() => checkOption(quizQuestions[ind].optionC)} >{quizQuestions[ind].optionC}</button> <button className='btn4' onClick={() => checkOption(quizQuestions[ind].optionD)} >{quizQuestions[ind].optionD}</button>
      
        </div>
        <div className='three_btn'>
            <button className='btn7' onClick={decrement}>Previous</button>
            <button className='btn5' onClick={increment}>Next</button>
            <button className='btn6'onClick={alertpop}>Quit</button>
            <Link to='/result'> <button className='btn8'>Finish</button></Link>
        </div>


    </div>
    </div>
      </>
    )
  
}

export default Quiz

