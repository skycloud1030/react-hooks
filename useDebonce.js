import { useState, useEffect, useCallback } from "react";
import _ from "lodash";

const useDebonce = (val, wait = 0, options) => {
  const [state, setState] = useState(val);
  const debonceSet = useCallback(_.debounce(val => setState(val), wait, options), []);
  useEffect(() => {
    if (state !== val) {
      debonceSet(val);
    }
  }, [val]);
  return state;
};

export default useDebonce;
