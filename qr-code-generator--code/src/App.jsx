import { Navbar } from "react-bootstrap";
import navLogo from "./assets/images/logo.png";
import { useState } from "react";
import QRCode from "qrcode.react";
const App = () => {
  const [input, setInput] = useState("https://www.google.com");

  const downloadImage = () => {
    const canvas = document.querySelector("canvas");
    const imageDataURI = canvas.toDataURL("image/png");
    const el = document.createElement("a");
    el.href = imageDataURI;
    el.download = "code.png";
    el.click();
  };
  return (
    <>
      <Navbar className='sticky-top nav' bg='light'>
        <div className='container'>
          <Navbar.Brand>
            <img className='nav-logo' src={navLogo} alt='' />
          </Navbar.Brand>
        </div>
      </Navbar>

      <div className='container'>
        <div className='row py-5'>
          <div className='col-md-6 offset-md-3'>
            <h3 className='font-weight-bolder'>QR Code Generator</h3>
            <hr />
            <input
              type='url'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='form-control'
              placeholder='Write something to generate qr code'
            />

            {input && (
              <>
                <QRCode
                  value={input}
                  size={200}
                  level='M'
                  className='mt-4 mb-3'
                />
                <button className='btn mt-4  btn-dark' onClick={downloadImage}>
                  Download QR
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
