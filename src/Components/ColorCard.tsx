import React, { FC, useEffect, useState } from 'react';
import { fullColorHex } from 'hadenajs';
import { Palette } from './Palette';

type Props = {
    displayColor: any,
    image: string,
    size: number,
    isLoading: boolean,
    link: string,
    setStatus: any,
    error: boolean,
    units: string,
}

const getPalette = async (photo: string) => {
  let colors = await fetch(`/api/palette?photo=${photo}`).then(res => res.json());
  return colors;
};

export const ColorCard: FC<Props> = ({ displayColor, image, size, isLoading, link, setStatus, error, units }: Props) => {
  const [showImage, setShowImage] = useState<boolean>(false);
  const [palette, setPalette] = useState<any[]>();
  const [paletteLoading, setPaletteLoading] = useState<boolean>(true);
  const [color, setColor] = useState<any | null>(displayColor);
  const [paletteError, setPaletteError] = useState<boolean>(false);
  const [showVariations, setShowVariations] = useState<boolean>(false);
  const toggleImage = () => setShowImage(prev => !prev);
  const [copyMessage, setCopyMessage] = useState<boolean>(false);

  const copy = () => {
    var elem = document.createElement('textarea');
    document.body.appendChild(elem);
    if(units === 'rgb') elem.value = `rgb(${color.r}, ${color.g}, ${color.b})`;
    else if (units === 'hex') elem.value = `#${fullColorHex(color.r, color.g, color.b)}`;
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
    setCopyMessage(true);
    setTimeout(() => {
      setCopyMessage(false);
    }, 1000);
  };

  let errorCount = 0;
  const fetchPalette = (image: string): void => {
    setPalette([]);
    getPalette(image).then(res => {
      setPalette([displayColor, ...res.color]);
      setPaletteLoading(false);
    }).catch(err => {
      console.log('ERROR:', err);
      if (errorCount < 3) {
        console.log('trying again', errorCount);
        setStatus('🧑‍💻 Encountered an error getting color palette, trying again...');
        errorCount++;
        fetchPalette(image);
      }
      else {
        setPaletteError(true);
        console.log(paletteError);
        setPaletteLoading(false);
        setStatus('🤷‍♂️ Some palettes could not be generated...');
      }
    });
  };

  useEffect(() => {
    if (image) {
      setStatus((prev: any) => [...prev, 'Looking for palette of ' + `#${fullColorHex(color.r, color.g, color.b)}`]);
      setPaletteError(false);
      setPaletteLoading(true);
      fetchPalette(image);
    }
  }, [image]);

  useEffect(() => {
    setColor(displayColor);
  }, [displayColor]);

  const changeColor = (color: any) => setColor(color);

  return (
    <div className={`relative rounded-lg ${isLoading || error ? 'animate-pulse' : ''}`}
      style={
        {
          backgroundSize: 'cover',
          background: showImage ? `${`url('${image}') no-repeat`}` : `rgb(${color.r}, ${color.g}, ${color.b})`,
          gridRow: `span ${size}`
        }
      }
    >
      {/* <div className={`${showVariations ? 'scale-150' : 'scale-0'} transition-all duration-300 flex z-40 items-center px-4 space-x-4 absolute rounded-md origin-left transform w-96 bg-blueGray-100 ring-2 ring-blueGray-300 h-12`}>
        <div className="h-6 w-6 rounded-md bg-blue-100"></div>
        <div className="h-6 w-6 rounded-md bg-blue-200"></div>
        <div className="h-6 w-6 rounded-md bg-blue-300"></div>
        <div className="h-6 w-6 rounded-md bg-blue-400"></div>
        <div className="h-6 w-6 rounded-md bg-blue-500"></div>
        <div className="h-6 w-6 rounded-md bg-blue-600"></div>
        <a onClick={() => setShowVariations(!showVariations)} className="group cursor-pointer p-2 rounded-lg hover:bg-blueGray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blueGray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </a>
      </div> */}
      <div 
        className={'group w-full h-full flex overflow-hidden flex-col'} 
      >
        {copyMessage ? <div className="absolute w-full h-full flex items-center justify-center">
          <p className="text-blueGray-100 font-semibold animate__animated animate__fadeInUp text-lg">Copied {units == 'rgb' ? 'RGB' : 'Hex'} !</p>
        </div> : ''}
        <div className="w-full flex justify-between p-4">
          <div className="relative">
            <div className="flex flex-col space-y-4">
              {/* <div onClick={() => setShowVariations(!showVariations)} className="w-10 h-10 bg-blueGray-100 flex items-center justify-center rounded-md cursor-pointer transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1 duration-300 ease-in-out transform transition-all group-hover:translate-x-0 -translate-x-16">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blueGray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div> */}
              <div onClick={() => setShowImage(!showImage)} className="w-10 h-10 bg-blueGray-100 flex items-center justify-center rounded-md cursor-pointer transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1 duration-300 ease-in-out transform transition-all group-hover:translate-x-0 -translate-x-16">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${showImage? '' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${showImage? 'hidden' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div onClick={copy} className="w-10 h-10 bg-blueGray-100 flex items-center justify-center rounded-md duration-300 ease-in-out transform transition-all group-hover:translate-x-0 translate-x-16 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blueGray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </div>
            <a target="_blank" rel="noreferrer" href={link} className="w-10 h-10 bg-blueGray-100 flex items-center justify-center rounded-md cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 ease-in-out transform transition-all group-hover:translate-x-0 translate-x-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blueGray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className="flex p-4">
          <Palette 
            palette={palette}
            paletteLoading={paletteLoading}
            paletteError={paletteError}
            color={color}
            changeColor={changeColor}
          />
        </div>
      </div>
    </div>
  );
};