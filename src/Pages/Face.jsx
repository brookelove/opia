import React, {useEffect, useRef}from "react";

const Face = () => {
    const cameraRef = useRef(null);

    const getPhoto = ()=> {
        navigator.mediaDevices.getUserMedia({video: {width:300}}).then(stream =>{
            let camera = cameraRef.current;
            camera.srcObject = stream;
            camera.play();
        })
    }
    useEffect(()=> {
        getPhoto();
    },[cameraRef])
 return (
    <div>
        <h1>Face</h1>
        <video ref={cameraRef}></video>
        <button>OPIA</button>
    </div>
 )
}
export default Face