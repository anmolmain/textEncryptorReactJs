import React from 'react'
import { useNavigate } from 'react-router-dom'

const Decrypt = () => {
    const navigate = useNavigate();

    const DecryptText = () => {
        var text = document.getElementById('DecryptionString').value
        var id = document.getElementById('DecryptionId').value
        if (!id || !text) {
            alert("Please fill all the fields")
        }
        else {
            var newStr = '';
            for (let i = 0; i < text.length; i++) {
                newStr += String.fromCharCode(text.charCodeAt(i) ^ parseInt(String(id)[0]))
            }
            document.getElementById('hiddenTextD').style.visibility = "visible";
            document.getElementById('OriginalText').innerHTML = newStr
        }
    }

    return (
        <div className='EncryptClass'>
            <hr />
            <button className='btnHome' onClick={() => navigate('/')}>Home</button>
            <br /><br />
            Your string here:
            <input autocomplete="off" type="text" id='DecryptionString' placeholder='Enter string' />
            <br />
            Decryption Id : <input autocomplete="off" type="number" id='DecryptionId' placeholder='Decryption ID ' />
            <br />

            <button className='btnE1' onClick={DecryptText}> DECRYPT</button>
            <h3 id='hiddenTextD'>Original Text is : </h3>
            <h3 id='OriginalText' style={{userSelect:"all"}}>  </h3>
        </div>
    )
}

export default Decrypt



