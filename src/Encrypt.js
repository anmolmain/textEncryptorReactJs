import React from 'react'
import './Encrypt.css'
import { useNavigate } from 'react-router-dom'
const Encrypt = () => {
  const navigate = useNavigate();
  function getRandom() {
    var id = parseInt(Math.random() * 10000);
    if (id === 0) {
      getRandom();
    }
    else {
      return id;
    }
  }
  function EncryptText() {
    var text = document.getElementById('textField').value
    var id = document.getElementById('id').value
    if (id[0]==='0') {
      alert("Encryption Id Cannot start with 0 , Enter any other number");
    }
    else{
      if (id) {
      }
      else {
        id = getRandom();
        console.log(id);
      }
      var newStr = '';
      for (let i = 0; i < text.length; i++) {
        newStr += String.fromCharCode(text.charCodeAt(i) ^ parseInt(String(id)[0]))
      }
      document.getElementById('hiddenText').style.visibility = "visible";
      document.getElementById('hiddenId').style.visibility = "visible";
      document.getElementById('textDisplay').innerHTML = newStr
      document.getElementById('idDisplay').innerHTML = id
      // var copyText = document.getElementById('hiddenText').value;
      // document.exeCommand("Copy");
      // copyText.setSelectionRange(0,999999);
      // navigator.clipboard.writeText(copyText.value);
      // alert("Encrypted Text copied to clipboard")

     
    } 
  }

  return (

    <div className='EncryptClass'>
      <hr />
      <button className='btnHome' onClick={() => navigate('/')}>Home</button>
      <br />
      Your string :
      <input autocomplete="off" type="text" id='textField' placeholder='Enter string' />
      <br />
      Custom  Id : <input autocomplete="off" type="number" id='id' placeholder='Optional : You can leave this field empty' />
      <br />

      <button className='btnE1' onClick={EncryptText}> ENCRYPT</button>
      <br />
      <h3 id='hiddenText'>Encrypted Text</h3>
      <h3 className='EncText' style={{userSelect:"all"}} id='textDisplay' >Encrypted text will be displayed here</h3>
      <h3 id='hiddenId'>Decryption Id :</h3>
      <h3 className='EncId' style={{userSelect:"all"}} id='idDisplay'>Decryption Id will be displayed here</h3>
    </div>
  )
}

export default Encrypt
