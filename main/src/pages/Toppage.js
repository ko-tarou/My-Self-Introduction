import React from 'react'
import '../styles/Toppage.css'
import "../App.css"

function Toppage() {

  const circle = {
    width: "50px",
    height: "50px",
    backgroundColor: "#000000",
    borderRadius:"50%"
  }

  const stick = {
    width:"10px",
    height: "100px",
    backgroundColor: "#000000"
  }


  return (
    <div className='Toppage'>

      
      <div className='body'>
        <div className='title'>
          ようこそ！
        </div>
        <div style={circle}></div>
        <div style={stick}></div>
      </div>
    </div>
  )
}

export default Toppage