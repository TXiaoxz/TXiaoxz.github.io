import { useState, useEffect, useRef } from 'react';

export type Action =
  | { type: 'type'; text: string; speed?: number }
  | { type: 'delete'; count: number }
  | { type: 'pause'; duration: number };

interface TerminalTypewriterProps {
  prompt: string;
  actions: Action[];
  typeSpeed?: number;
  deleteSpeed?: number;
  loop?: boolean;
  loopDelay?: number;
}

export function TerminalTypewriter({
  prompt,
  actions,
  typeSpeed = 100,
  deleteSpeed = 50,
  loop = false,
  loopDelay = 1000,
}: TerminalTypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentActionIndex, setCurrentActionIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<number | undefined>();
  const intervalRef = useRef<number | undefined>();

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Clear any existing interval or timeout
    if (intervalRef.current !== undefined) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
    if (timeoutRef.current !== undefined) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }

    if (currentActionIndex >= actions.length) {
      if (loop) {
        timeoutRef.current = window.setTimeout(() => {
          setDisplayText('');
          setCurrentActionIndex(0);
        }, loopDelay);
      }
      return;
    }

    const action = actions[currentActionIndex];

    if (action.type === 'pause') {
      timeoutRef.current = window.setTimeout(() => {
        setCurrentActionIndex((prev) => prev + 1);
      }, action.duration);
    } else if (action.type === 'type') {
      const speed = action.speed || typeSpeed;
      const textToType = action.text;
      let charIndex = 0;

      intervalRef.current = window.setInterval(() => {
        if (charIndex < textToType.length) {
          const charToAdd = textToType[charIndex];
          setDisplayText((prev) => prev + charToAdd);
          charIndex++;
        } else {
          if (intervalRef.current !== undefined) {
            clearInterval(intervalRef.current);
            intervalRef.current = undefined;
          }
          setCurrentActionIndex((prev) => prev + 1);
        }
      }, speed);
    } else if (action.type === 'delete') {
      let deleteCount = 0;
      const totalToDelete = action.count;

      intervalRef.current = window.setInterval(() => {
        if (deleteCount < totalToDelete) {
          setDisplayText((prev) => prev.slice(0, -1));
          deleteCount++;
        } else {
          if (intervalRef.current !== undefined) {
            clearInterval(intervalRef.current);
            intervalRef.current = undefined;
          }
          setCurrentActionIndex((prev) => prev + 1);
        }
      }, deleteSpeed);
    }

    return () => {
      if (intervalRef.current !== undefined) {
        clearInterval(intervalRef.current);
        intervalRef.current = undefined;
      }
      if (timeoutRef.current !== undefined) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = undefined;
      }
    };
  }, [currentActionIndex, actions, typeSpeed, deleteSpeed, loop, loopDelay]);

  return (
    <div className="text-black/70 text-base leading-relaxed">
      <span className="text-purple-600">{prompt}</span>
      <span> {displayText}</span>
      <span
        className={`inline-block w-2 h-4 bg-black/70 ml-1 align-text-bottom ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
