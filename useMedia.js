import { useEffect, useState } from "react";

function useMedia(mediaQueryString, { initialMatches = true } = {}) {
  const [matches, setMatches] = useState(initialMatches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);

    setMatches(mediaQueryList.matches);

    const handleChange = e => setMatches(e.matches);

    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener("change", handleChange);
      return () => mediaQueryList.removeEventListener("change", handleChange);
    } else {
      mediaQueryList.addListener("change", handleChange);
      return () => mediaQueryList.removeListener("change", handleChange);
    }
  }, [mediaQueryString]);

  return matches;
}

export default useMedia;
