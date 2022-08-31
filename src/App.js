import React from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const navigate = useNavigate();
  return (
    <div className='MainDiv'>
      {/* <hr /> */}
      {/* <hr /> */}
      <h1>Don't Worry Your data is truly safe</h1><br />
      <hr /><hr />
      <button className='btnE' onClick={() => navigate('/Encrypt')}>Encrypt</button>
      <button className='btnE' onClick={() => navigate('/Decrypt')}>Decrypt</button>
      <hr /><hr />
      <br /><h1>This magic Happens at your browser itself <br /></h1>
      <h3>" It's Not the Magic , It's the Power of Javascript "</h3>
      <br /><br />
      <div>
        <footer className="" style={{left: "0px",bottom:"0px"}}>
        © 2022 Copyright:
        <a href="https://github.com/anmolmain" target="_blank"> https://github.com/anmolmain</a>
      </footer >
    </div >
    </div >
  )
}

export default App
