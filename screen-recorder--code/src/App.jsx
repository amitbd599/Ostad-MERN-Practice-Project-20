import { Navbar } from "react-bootstrap";
import navLogo from "./assets/images/logo.png";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [videoURL, setVideoURL] = useState("");
  const [recordingTime, setRecordingTime] = useState(0);
  const mediaRecorderRef = useRef(null);
  const intervalRef = useRef(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: { mediaSource: "screen" },
    });

    const chunks = [];
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (e) => {
      if (e.data.size > 0) {
        chunks.push(e.data);
      }
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      setVideoURL(URL.createObjectURL(blob));
      clearInterval(intervalRef.current);
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
    setRecordingTime(0);
    intervalRef.current = setInterval(() => {
      setRecordingTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  let stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <Navbar className='sticky-top nav' bg='light'>
        <div className='container'>
          <Navbar.Brand>
            <img className='nav-logo' src={navLogo} alt='' />
          </Navbar.Brand>
        </div>
      </Navbar>

      <div className='container mt-5'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-12'>
            <button
              className='btn btn-dark'
              onClick={isRecording ? stopRecording : startRecording}
            >
              {isRecording ? "Stop Recording" : "Start Recording"}
            </button>

            <h6 className='mt-4'>
              Recording Time: {formatTime(recordingTime)}
            </h6>

            {videoURL && (
              <>
                <div className='video-container'>
                  <video controls className='recorded-video'>
                    <source src={videoURL} type='video/webm' />
                  </video>
                  <div className='overlay'>
                    <h1 className='overlay-text'>
                      Recording Time: {formatTime(recordingTime)}
                    </h1>
                  </div>
                </div>

                <a href={videoURL} download className='btn mt-3 btn-dark'>
                  Download Video
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
