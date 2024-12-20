import { Container, Navbar } from "react-bootstrap";
import navLogo from "../assets/images/logo.svg";
import { useState } from "react";
const ConvertPage = () => {
  const [base64, setBase64] = useState("");
  const [fileName, setFileName] = useState("");
  const [copySuccess, setCopySuccess] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCopy = () => {
    if (base64) {
      navigator.clipboard.writeText(base64).then(() => {
        setCopySuccess("Copied to clipboard!");
        setTimeout(() => setCopySuccess(""), 2000);
      });
    }
  };
  return (
    <>
      <Navbar className='sticky-top nav' bg='light'>
        <Container>
          <Navbar.Brand>
            <img className='nav-logo' src={navLogo} alt='' />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div className='container my-5'>
        <h1 className='text-center'>Image to Base64 Converter</h1>
        <div className='card shadow mt-4'>
          <div className='card-body'>
            <div className='mb-3'>
              <label htmlFor='imageUpload' className='form-label'>
                Upload an Image
              </label>
              <input
                type='file'
                className='form-control'
                id='imageUpload'
                accept='image/*'
                onChange={handleFileChange}
              />
            </div>
            {base64 && (
              <div className='mt-4'>
                <h5>File Name: {fileName}</h5>
                <h6>Base64 Output:</h6>
                <textarea
                  className='form-control mb-3'
                  rows='10'
                  readOnly
                  value={base64}
                ></textarea>
                <div className='d-flex gap-2 align-item-center'>
                  <div className='mr-2'>
                    <button className='btn btn-primary ' onClick={handleCopy}>
                      Copy Code
                    </button>
                  </div>
                  <div className=' d-flex align-items-center'>
                    {copySuccess && (
                      <span className='text-success fw-bold '>
                        {copySuccess}
                      </span>
                    )}
                  </div>
                </div>

                <img
                  src={base64}
                  alt='Uploaded'
                  className='img-fluid rounded shadow mt-3'
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConvertPage;
