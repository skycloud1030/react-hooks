import { useState, useCallback, useEffect } from "react";
import _ from "lodash";

const useThrottle = (val, wait = 0) => {
  const [state, setState] = useState(val);
  const debonceSet = useCallback(
    _.debounce(val => setState(val), wait, { maxWait: wait, leading: true }),
    []
  );
  useEffect(() => {
    if (state !== val) {
      debonceSet(val);
    }
  }, [val]);
  return state;
};

export default useThrottle;
