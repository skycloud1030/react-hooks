import { useState, useEffect } from "react";

export default function useUnmount(callback) {
  useEffect(() => {
    window.addEventListener("beforeunload", callback);
    return () => {
      window.removeEventListener("beforeunload", callback);
    };
  }, []);
}
