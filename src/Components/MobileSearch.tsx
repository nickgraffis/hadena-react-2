import React, { FC } from 'react';
import { MagnifyingGlass } from '../Icons';

type Props = {
  input: string,
  handleInput: (event: React.KeyboardEvent) => void,
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const MobileSearch: FC<Props> = ({ input, handleInput, handleChangeInput }: Props) => {
  return (
    <div className={'z-20 relative flex items-center fixed bottom-0 w-full lg:hidden'}>
      <div className="absolute left-4">
        <MagnifyingGlass className="h-4 w-4" />
      </div>
      <input 
        value={input} 
        onChange={handleChangeInput} 
        onKeyDown={handleInput} 
        className={`apperance-none pl-10 bg-gray-100 dark:bg-blueGray-800
        px-4 py-2 text-md w-full focus:outline-none ring-2 
        ring-blueGray-800 dark:ring-gray-100`} 
      />
    </div>
  );
};