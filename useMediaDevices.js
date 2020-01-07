import { useEffect, useState } from "react";

export default function useMediaDevices(video_ref, facingMode = "environment") {
  const [stream, setStream] = useState();
  const [isReady, setReady] = useState(false);
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode }, audio: false })
      .then(stream => {
        video_ref.current.srcObject = stream;
        setStream(stream);
        video_ref.current.oncanplay = () => {
          video_ref.current.play();
          setReady(true);
        };
      });

    return () => {
      // release stream
      setReady(false);
      stream.getTracks().forEach(track => {
        track.stop();
      });
    };
  }, [facingMode]);

  return isReady;
}
