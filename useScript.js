import { useState, useEffect } from "react";
function useScript(url) {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    function load() {
      setLoaded(true);
    }
    if (url) {
      const script = document.createElement("script");
      script.src = url;
      document.body.appendChild(script);
      script.addEventListener("load", load);
      return () => script && script.removeEventListener("load", load);
    }
  }, []);

  return isLoaded;
}

export default useScript;
