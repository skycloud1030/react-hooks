import { useEffect, useState } from "react";

export default function useDocumentVisibility() {
  let [documentVisibility, setDocumentVisibility] = useState(document.visibilityState === "visible");

  useEffect(() => {
    function handleVisibilityChange() {
      setDocumentVisibility(document.visibilityState === "visible");
    }
    window.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      window.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return documentVisibility;
}
