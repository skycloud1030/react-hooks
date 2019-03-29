import { useState, useRef, useEffect } from "react";
import "intersection-observer";

export default function useVisibility(node, options = {}) {
  const [visible, setVisibilty] = useState("hidden");
  const isIntersecting = useRef();

  const handleObserverUpdate = entries => {
    const ent = entries[0];

    if (isIntersecting.current !== ent.isIntersecting) {
      const state = ent.isIntersecting ? "visible" : "hidden";
      setVisibilty(state);
      isIntersecting.current = ent.isIntersecting;
    }
  };

  const observer = new IntersectionObserver(handleObserverUpdate, options);

  useEffect(() => {
    const element = node.current;

    if (!element) {
      return;
    }
    
    observer.observe(element);

    return function cleanup() {
      observer.unobserve(element);
    };
  }, []);

  return visible;
}
