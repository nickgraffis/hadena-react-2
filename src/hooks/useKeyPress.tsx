import { useEffect } from 'react';

/**
 * useKeyPress
 * @param {string} key - the name of the key to respond to, compared against event.key
 * @param {function} action - the action to perform on key press
 * @param {string} hold - an additonal key hold requirement
 */
export const useKeypress = (key: string, action: () => void, hold?: string) => {
  useEffect(() => {
    function onKeyDown(e: any) {
      if (hold ? e.key === key && e[hold] : e.key === key) action();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);
};