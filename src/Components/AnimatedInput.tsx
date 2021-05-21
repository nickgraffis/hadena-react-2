import React, {useState, useEffect, useRef, FC} from 'react';
import { words } from '../data/colors';
import { useKeypress } from '../hooks/useKeyPress';
import { rand } from '../utils/math';

const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

type Props = {
    changeColor: (key: string) => void,
    onKeyUp: any,
    onChange: any,
    value: any,
    className: string
}

export const AnimatedInput: FC<Props> = ({changeColor, ...passedProps}: any) => {
  const passedPlaceholderArray = Object.keys(words).map(key => key);
  const [index, setIndex] = useState(rand(passedPlaceholderArray.length - 1));
  const [placeholder, setPlaceholder] = useState(passedPlaceholderArray[index].slice(0, 0));
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const inputRef = useRef<HTMLDivElement>(null);
  
  useKeypress('k', () => {
    if (inputRef.current) inputRef.current.focus();
  });

  useEffect(() => {
    let mounted = true;
    const intr = setInterval(async () => {
      if (mounted) {
        setPlaceholder(passedPlaceholderArray[index].slice(0, placeholderIndex));
        if (placeholderIndex === passedPlaceholderArray[index].length) {
          changeColor(passedPlaceholderArray[index]);
          await sleep(5000);
          setPlaceholderIndex(0);
          setIndex(rand(passedPlaceholderArray.length - 1));
        } else {
          setPlaceholderIndex(placeholderIndex + 1);
        }
      }
    }, 150);
    return () => {
      clearInterval(intr);
      mounted = false;
    };
  });


  return <input {...passedProps} ref={inputRef} placeholder={placeholder}/>;
};