import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { Image, PixelData, RGB } from '../hadena';
import { fetchColorFromPixels } from '../utils/fetchColor';
import { imagine } from '../utils/imagesearch';

type Props = {
  pixels: PixelData | undefined,
  changeColor: React.Dispatch<React.SetStateAction<RGB>>,
  color: RGB,
}

export const Palette: FC<Props> = ({ 
  pixels,
  color,
  changeColor,
}: Props) => {

  const [isLoading, setLoading] = useState<boolean>(true);
  const [palette, setPalette] = useState<RGB[] | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);
  const [errorCount, setErrorCount] = useState<number>(0);
  
  const getPalette = (pix: PixelData): void => {
    setError(false);
    setLoading(true);
    fetchColorFromPixels(pix, 6)
      .then(res => {
        setPalette([color, ...res[0].map(c => { return {r: c.r, g: c.g, b: c.b }; })]);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        if (errorCount < 2) {
          setErrorCount(prev => prev + 1);
          getPalette(pix);
        } else {
          setError(true);
          setLoading(false);
        }
      });
  };

    
  useEffect(() => {
    if (pixels) {
      setErrorCount(0);
      getPalette(pixels);
    }
  }, [pixels]);

  return (
    <div 
      className={`group flex self-start relative overflow-hidden w-12 
      ${isLoading || error ? '' : 'hover:w-56'} transition-all duration-300 
      ease-in-out h-12 rounded-lg bg-blueGray-100 shadow-lg ease-in-out 
      transform transition-all group-hover:translate-x-0 -translate-x-16`}
    >
      <div className="flex items-center relative justify-center w-full h-full">
        <div 
          className={`absolute palette -left-12 z-20 w-56 
          ${isLoading || error ? '' : 'group-hover:left-14'} flex items-center`}
        >
          {
            isLoading || error ? '' : palette?.map((p, i) => 
              p != color ? <p 
                onClick={() => changeColor(p)} 
                key={i} 
                className="h-6 w-6 transform transition-all duration-150 hover:scale-125 hover:z-30" 
                style={{backgroundColor: `rgb(${p.r}, ${p.g}, ${p.b})`}}></p> : '')
          }
        </div>
        <div className="absolute left-0 flex items-center relative w-full h-full">
          {isLoading ?
            <svg
              id="loading-spinner" 
              className="animate-spin absolute left-3 h-6 w-6 text-blueGray-400" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg> : ''}
          {!isLoading && !error ? <div className="flex z-30 items-center justify-center relative w-12 h-12 bg-blueGray-100">
            <svg 
              id="palette"
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 absolute left-3 text-blueGray-800" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div> : ''}
          {error ? 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="absolute left-3 h-6 w-6 text-red-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg> : <p>{error}</p>
          }
        </div>
      </div>
    </div>
  );
};