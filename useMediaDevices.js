import { useEffect, useState } from "react";

export default function useMediaDevices(video_ref, facingMode = "environment") {
  const [isReady, setReady] = useState(false);
  useEffect(() => {
    let stream;
    let isDirty = false;
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode }, audio: false })
      .then(media => {
        if(!isDirty){
          stream = media;
          video_ref.current.srcObject = media;
          video_ref.current.oncanplay = () => {
            video_ref.current.width = video_ref.current.videoWidth;
            video_ref.current.height = video_ref.current.videoHeight;
            video_ref.current.play();
            setReady(true);
          };
        }
      });
    return () => {
      // release stream
      setReady(false);
      isDirty = true;
      if(stream){
        stream.getTracks().forEach(track => {
          track.stop();
        });
      }
    };
  }, [facingMode]);

  return isReady;
}
