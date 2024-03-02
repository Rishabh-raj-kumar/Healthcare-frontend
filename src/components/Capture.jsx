import React, { useState } from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 300,
  height: 300,
  facingMode: "user",
};
function Capture() {
  const webcamRef = React.useRef(null);
  const [image, setImage] = useState("");
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  return (
    <div className="webcam-container grid place-items-center h-screen">
      <div>
        {image == "" ? (
          <Webcam
            audio={false}
            height={300}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={300}
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={image} />
        )}
        <button
          className=" bg-black px-4 py-3 text-white m-4 rounded"
          onClick={(e) => {
            e.preventDefault();
            capture();
          }}
        >
          Capture
        </button>
      </div>
    </div>
  );
}

export default Capture;
