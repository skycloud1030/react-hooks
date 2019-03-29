import { useState, useCallback } from "react";

export default function useMerge(props) {
  const [state, setState] = useState(props);
  const mergeState = useCallback(
    input =>
      setState(state => {
        if (typeof input === "function") {
          return { ...state, ...input(state) };
        }
        return { ...state, ...input };
      }),
    []
  );
  return [state, mergeState];
}
