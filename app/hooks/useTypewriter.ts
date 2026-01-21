"use client";

import { useEffect, useState } from "react";

type Options = {
  speed?: number;
  startDelay?: number;
};

export function useTypewriter(
  text: string,
  options: Options = {}
) {
  const { speed = 60, startDelay = 0 } = options;

  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, index));
        index++;

        if (index > text.length) {
          clearInterval(interval);
          setIsDone(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayedText, isDone };
}
