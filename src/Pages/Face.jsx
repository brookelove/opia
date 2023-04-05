import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";

const Face = () => {
  const cameraRef = useRef(null);
  const photoRef = useRef(null);
  const stripRef = useRef(null);

  const getPhoto = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 700 } })
      .then((stream) => {
        let camera = cameraRef.current;
        camera.srcObject = stream;
        camera.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  const takePhoto = () => {
    let photo = photoRef.current;
    let strip = stripRef.current;

    const data = photoRef.current.getScreenshot();
    console.warn(data);
    const link = document.createElement("a");
    link.href = data;
    link.setAttribute("download", "myWebcam");
    link.innerHTML = `<img src='${data}' alt='thumbnail'/>`;
    strip.insertBefore(link, strip.firstChild);
  };

  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <div>
      <h1>Face</h1>
    <Webcam screenshotFormat="image/jpeg" ref={photoRef} />
      <button onClick={takePhoto}>OPIA</button>
      <div ref={stripRef}></div>
    </div>
  );
};

export default Face;





