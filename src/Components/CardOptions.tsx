import React, { FC } from 'react';
import { Image } from '../hadena';
import { EyeBallOpen, EyeBallClosed, Copy, Globe } from '../Icons';

type Props = {
    showImage: boolean,
    setShowImage: React.Dispatch<React.SetStateAction<boolean>>,
    copy: () => void,
    image: Image
}

export const CardOptions: FC<Props> = ({ 
  showImage, 
  setShowImage, 
  copy,
  image
}: Props) => {
  return (
    <div className="w-full flex justify-between p-4">
      <div className="relative">
        <div className="flex flex-col space-y-4">
          <div 
            onClick={() => setShowImage(!showImage)} 
            className={`w-10 h-10 bg-blueGray-100 flex items-center
                  justify-center rounded-md cursor-pointer transition-all 
                  shadow-md hover:shadow-xl transform hover:-translate-y-1 
                  duration-300 ease-in-out transform transition-all 
                  group-hover:translate-x-0 -translate-x-16`}
          >
            <EyeBallOpen className={`h-6 w-6 ${showImage? '' : 'hidden'}`} />
            <EyeBallClosed className={`h-6 w-6 ${showImage? 'hidden' : ''}`} />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div 
          onClick={copy} 
          className={`w-10 h-10 bg-blueGray-100 flex items-center justify-center 
                rounded-md duration-300 ease-in-out transform transition-all 
                group-hover:translate-x-0 translate-x-16 cursor-pointer shadow-md 
                hover:shadow-xl hover:-translate-y-1`}
        >
          <Copy className="h-6 w-6 text-blueGray-800" />
        </div>
        <a 
          target="_blank" 
          rel="noreferrer" 
          href={image.link} 
          className={`w-10 h-10 bg-blueGray-100 flex items-center justify-center 
                rounded-md cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl 
                transform hover:-translate-y-1 ease-in-out transform transition-all 
                group-hover:translate-x-0 translate-x-16`}
        >
          <Globe className="h-6 w-6 text-blueGray-800" />
        </a>
      </div>
    </div>
  );
};