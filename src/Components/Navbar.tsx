import React, { FC, useState } from 'react';
import { Link } from 'react-navi';
import { Hadena } from '../Icons/Hadena';
import { Unit } from '../hadena';

type Props = {
    input: string,
    inputRef: any,
    units: string,
    handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleInput: (event: React.KeyboardEvent) => void,
    setUnits: (unit: Unit) => void
}

export const Navbar: FC<Props> = ({ input, inputRef, units, handleChangeInput, handleInput, setUnits }: Props) => {
  const [showTools, setShowTools] = useState<boolean>(false);

  return (
    <div className="h-16 w-full flex items-center justify-between px-16 pt-6">
      <Link href="/" className="flex items-center space-x-6 font-semibold text-base flex-shrink-0">
        <Hadena />
        <span>派手な HADENA</span>
      </Link>
      <div className="flex-grow">
        <div className={'z-20 relative items-center px-16 hidden lg:flex'}>
          <div className="absolute left-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input value={input} ref={inputRef} onChange={handleChangeInput} onKeyDown={handleInput} className="apperance-none pl-10 bg-gray-100 dark:bg-blueGray-800 px-4 py-2 text-md rounded-lg w-full focus:outline-none ring-2 ring-blueGray-800 dark:ring-gray-100" />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="relative flex items-center justify-center">
          <a onClick={() => setShowTools(!showTools)} className="group cursor-pointer p-2 rounded-lg transition-colors duration-150 ease-in-out text-blueGray-500 hover:text-blueGray-600 hover:bg-blueGray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </a>
          <div className={`absolute rounded-lg w-48 bg-blueGray-100 border-[1px] border-blueGray-400 right-0 top-12 z-50 transition-all duration-150 ${showTools ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <ul className="px-2 space-y-2 py-2 font-medium text-sm">
              <li onClick={() => setUnits('rgb')} className="rounded-md py-1 px-2 hover:bg-blueGray-200 cursor-pointer flex items-center space-x-2 w-full">
                <div className="relative flex items-center justify-center pr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${units === 'rgb' ? 'scale-100 opacity-100' : 'scale-0 opacity-0' } transition-all duration-150 transform h-3 w-3 absolute z-50`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <svg
                    id="circle" 
                    className="h-5 w-5 text-blueGray-400 absolute" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24">
                    <circle className="" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                  </svg>
                </div>
                <span>Use <code>rgb()</code></span>
              </li>
              <li onClick={() => setUnits('hex')} className="rounded-md py-1 px-2 hover:bg-blueGray-200 cursor-pointer flex space-x-2 w-full">
                <div className="relative flex items-center justify-center pr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${units === 'hex' ? 'scale-100 opacity-100' : 'scale-0 opacity-0' } transition-all duration-150 transform h-3 w-3 absolute z-50`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <svg
                    id="circle" 
                    className="h-5 w-5 text-blueGray-400 absolute" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24">
                    <circle className="" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                  </svg>
                </div>
                <span>Use <code>#hex</code></span>
              </li>
              <li onClick={() => setUnits('hsl')} className="rounded-md py-1 px-2 hover:bg-blueGray-200 cursor-pointer flex space-x-2 w-full">
                <div className="relative flex items-center justify-center pr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${units === 'hsl' ? 'scale-100 opacity-100' : 'scale-0 opacity-0' } transition-all duration-150 transform h-3 w-3 absolute z-50`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <svg
                    id="circle" 
                    className="h-5 w-5 text-blueGray-400 absolute" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24">
                    <circle className="" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                  </svg>
                </div>
                <span>Use <code>hsl()</code></span>
              </li>
            </ul>
          </div>
        </div>
        <a className="group cursor-pointer p-2 rounded-lg transition-colors duration-150 ease-in-out hover:bg-blueGray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 16 16" aria-hidden="true">
            <path fill="currentColor" className="text-blueGray-400 group-hover:text-red-500 transition-colors duration-150 ease-in-out" fillRule="evenodd" d="M15 8A7 7 0 101 8a7 7 0 0014 0zM4 8a4 4 0 118 0 4 4 0 01-8 0z" clipRule="evenodd"></path>
            <path fill="currentColor" className="text-blueGray-600 group-hover:text-blueGray-100 transition-colors duration-150 ease-in-out" d="M13.77 11.97L11.58 9.8c-.23.45-.54.86-.92 1.2l2.12 2.12c.37-.34.7-.72.99-1.14zM3.22 13.11L5.34 11c-.38-.34-.7-.75-.92-1.2l-2.18 2.18c.28.42.61.8.98 1.14zm2.41-8.33c-.4.3-.75.67-1.02 1.1L2.46 3.72c.3-.4.65-.76 1.04-1.08l2.13 2.14zm5.81 1.17c-.26-.43-.6-.81-1-1.12l2.13-2.13c.38.33.72.7 1.03 1.1l-2.16 2.15z"></path>
          </svg>
        </a>
        <p>Hi</p>
      </div>
    </div>
  );
};