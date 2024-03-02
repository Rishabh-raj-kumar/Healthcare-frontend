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
        {image != "" ? (
            <>
          <button
            onClick={(e) => {
              e.preventDefault();

              setImage("");
            }}
            className=" bg-black text-white px-4 py-3 rounded m-3"
          >
            Retake Image
          </button>
          <button className=" bg-green-700 rounded text-white px-4 py-3 ">
            Done
          </button>
          </>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();

              capture();
            }}
            className=" bg-blue-800 text-white px-4 py-3 rounded m-3"
          >
            Capture
          </button>
        )}
      </div>
    </div>
  );
}

export default Capture;
