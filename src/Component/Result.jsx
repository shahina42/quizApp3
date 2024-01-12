import React, { Component } from 'react'
import './style.css'
import {Link,useNavigate} from 'react-router-dom'

const Result=(props)=> {
  const navigate = useNavigate()

  const play = () => {
    props.setScore(0)
    props.setAttempted(0)
    navigate('/quiz')
  };

  const home = () => {
    props.setScore(0)
    props.setAttempted(0)
    navigate('/')
  };

    return (
      <>
      
      <div className='pg3'>
    <div className='topic'><h1>Result</h1>
        <div className='result'>
            <h3>You need to practice more!</h3>
            <h2>Your score is {props.score}</h2>
<div className='score'>
<div  className='score_1' ><p>Total Number of questions</p> <p>15</p></div>
<div className='score_1' ><p>Number of attempted questions</p> <p>{props.attempted}</p></div>
<div className='score_1'><p>Number of correct answers</p> <p>{props.score}</p></div>
<div className='score_1'><p>Number of wrong answers</p> <p>{props.attempted - props.score}</p></div>
</div>
<div>
  
</div>

        </div>
        <button className="btn_again" onClick={play}>Play again</button>
        <button className='btn_again' onClick={home}>Back to Home</button>
        </div>  
        
    </div>
      
      
      </>
    )
  }




export default Result 

















