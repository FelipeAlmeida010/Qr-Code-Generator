import { useState } from 'react';
import QRCode from 'react-qr-code';
import QrCodeLink from 'qrcode';
import './App.css';

function App() {
    const [link, setlink] = useState('')
    const [qrcodeLink, setQrcodeLink] = useState('')

    function handleGenerate(Link_url){
        QrCodeLink.toDataURL(Link_url,{
            width:600,
            margin: 3,

        },function (error,url){
            setQrcodeLink(url);
        } )
    }

    function handleQrcode(event){
        setlink(event.target.value);
        handleGenerate(event.target.value)
    }
return (
    <div className="container">

        <QRCode
        value={link}
        />
        <h1>QR Code Generator</h1>

        <input
        className="input"
        placeholder='Name'
        />

        <input
        className="input"
        placeholder='Linkedin URL / GitHub URL'
        value={link}
        onChange={(event) => handleQrcode(event)}
        />
         
        <a href={qrcodeLink} download={`qrcode.png`}><button>Generate Image</button></a>
        
    </div>
);

}

export default App;
