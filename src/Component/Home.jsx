import React, { Component } from 'react'
import './style.css'
import{Link} from 'react-router-dom'


const   Home=()=>{




    return (
     
     <div className='pg1'>
     <h2>Quiz App</h2>
    <Link to='/quiz'><button className='play_btn' >Play</button></Link>
   </div>
    
    )
  
}

export default  Home;





