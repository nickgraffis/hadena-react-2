import fakeProcess from '../fakeenv';
import { words } from '../data/colors';
import { Hadena } from '../Icons/Hadena';
import { useNavigation } from 'react-navi';
import React, { useState, FC } from 'react';
import Footer from '../Components/Footer';
import { FlyingBoxes } from '../Art/FlyingBoxes';
import { AnimatedInput } from '../Components/AnimatedInput';

type Props = { }

const Home: FC<Props> = () => {
  const [demoColors, setDemoColors] = useState<any[]>(new Array(8).fill('#808080'));
  const [input, setInput] = useState<string>('');
  /** TODO: Animated the FlyingBoxes and AnimatedInput on Enter */
  const [blowUp, setBlowUp] = useState<boolean>(false);
  const navi = useNavigation();
  
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  };

  const handleInput = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      navi.navigate('/search?query='+encodeURIComponent(input));
    }
  };

  const changeColors = (word: string) => {
    setDemoColors(words[word]);
  };

  return (
    <>
      <div className="flex flex-col space-y-12 mx-auto items-center max-w-2xl h-screen px-8 md:px-0 lg:px-0 justify-center">
        <p className={`z-20 flex items-center w-full justify-center space-x-6 text-[50px] font-black transform transition-all duration-300 ${blowUp ? '-translate-y-96' : '-translate-y-0'}`}>
          <Hadena className="h-[80px] w-[80px]" /> 
          <span>{fakeProcess.env.TITLE}</span>
        </p>
        <div className={'z-20 relative flex w-full items-center transform transition-all duration-300'}>
          <div className="absolute left-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-[50px] w-[50px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <AnimatedInput changeColor={changeColors} onKeyUp={handleInput} onChange={handleChangeInput} value={input} className="apperance-none pl-[85px] bg-gray-100 dark:bg-blueGray-800 px-4 text-[40px] rounded-lg w-full focus:outline-none ring-4 ring-blueGray-800 dark:ring-gray-100" />
        </div>
        <div className="z-20 absolute bottom-4 flex justify-between px-12 w-full text-sm font-semibold">
          <Footer />
        </div>
      </div>
      <FlyingBoxes colors={demoColors}/>
    </>
  );
};

export default Home;