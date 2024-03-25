import React from 'react'
import './Home.css'
const pilates = require('./pilates2.jpg')

const Home = () => {
  return (
    <div className='main'>
      <div style={{ backgroundColor: 'whitesmoke', float: 'left' , width:'50%', height:'130%'}} className='hero'>
        1
        <h1 style={{ color:'white', backgroundColor: 'pink', textAlign: 'center'}}>
          PILATES AT HOME
        </h1>

        <h2 style={{textAlign: 'center'}}>FITNESS AT YOUR FINGERTIPS</h2>
       </div>
      <div className='hero2' style={{ backgroundColor: 'white', float:'right', width: '50%', height:'130%'}} >  
      2  
         </div>
          </div>
  )
}

export default Home