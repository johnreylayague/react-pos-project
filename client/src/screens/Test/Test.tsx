import React, { useState } from "react";
import Webcam from "react-webcam";

const CameraComponent = () => {
  const [isFrontCamera, setIsFrontCamera] = useState(true);

  const videoConstraints = {
    facingMode: isFrontCamera ? "user" : "environment",
  };

  return (
    <div>
      <button onClick={() => setIsFrontCamera(!isFrontCamera)}>
        Switch to {isFrontCamera ? "Back" : "Front"} Camera
      </button>
      <Webcam videoConstraints={videoConstraints} />
    </div>
  );
};

export default CameraComponent;
