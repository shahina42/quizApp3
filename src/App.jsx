import React, { Component, useState } from 'react'
import { Route, Routes } from 'react-router-dom' 
import Home from './Component/Home'
import Quiz from './Component/Quiz'
import Result  from './Component/Result'


export default function App() {
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);

  return (
    <div>
    
    
    <Routes>
    <Route path='/' element={<Home/>}/>

    <Route path='/quiz' element={<Quiz score={score} setScore={setScore} attempted={attempted} setAttempted={setAttempted}/>}/>
    <Route path='/result' element={<Result score={score} setScore={setScore} attempted={attempted} setAttempted={setAttempted}/>}/>


    </Routes>
    
    </div>
  )
}
