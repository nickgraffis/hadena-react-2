import React, { FC } from 'react';
import { Link } from 'react-navi';

type Props = {
    error: boolean,
    setError: React.Dispatch<React.SetStateAction<boolean>>
    errorCount: number,
    setErrorCount: React.Dispatch<React.SetStateAction<number>>,
    getImages: (query: string) => void,
    query: string
}

export const ErrorModal: FC<Props> = ({ 
  error,
  setError,
  errorCount, 
  setErrorCount, 
  getImages, 
  query 
}: Props) => {
  return (
    <div 
      className={`p-12 bg-blueGray-100 w-96 space-y-12 ring-4 
    ring-blueGray-800 rounded-lg flex flex-col items-center transform 
    transition-all duration-300 ${error ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
    >
      <p className="text-xl font-black">There was an error!</p>
      <div className="font-semibold leading-9 text-center">
        <p>
          {'This could be becuase your search words couldn\'t find any images.'
                + ' Or possibly there was some sort of error in the machine learning used to calculate the colors.'}
        </p>
      </div>
      <div className="w-full flex items-center justify-between">
        <div 
          onClick={() => { setErrorCount(0); getImages(query);}} 
          className={`transform transition-all duration-150 hover:-translate-y-1 
        hover:shadow-xl shadow-md cursor-pointer rounded-md bg-red-500 text-blueGray-100 p-2 font-semibold`}
        >
            Try Again
        </div>
        <Link href="/" className="font-semibold text-blue-500 hover:text-blue-700">New Search</Link>
      </div>
    </div>
  );
};