import { useState } from "react";
export default function useWorker(worker) {
  const [state] = useState(() => worker());
  return state;
}
