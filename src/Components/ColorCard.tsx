import React, { FC, useEffect, useState } from 'react';
import { Image, PixelData, RGB, Unit } from '../hadena';
import { fetchColorAndPixelsFromImage } from '../utils/fetchColor';
import { isWhite } from '../utils/isWhite';
import { hexToRGB, fullColorHex } from 'hadenajs';
import { rand } from '../utils/math';
import { CardOptions } from './CardOptions';
import { backdrop, wrapper } from '../utils/customStyles';
import { Palette } from './Palette';
import { imagine } from '../utils/imagesearch';

type Props = {
  image: Image,
  units: Unit
}

const ColorCard: FC<Props> = ({ image, units }: Props) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [errorCount, setErrorCount] = useState<number>(0);
  const [primaryColor, setPrimaryColor] = useState<RGB>({ r: 209, g: 213, b: 219 });
  const [showImage, setShowImage] = useState<boolean>(false);
  const [size, setSize] = useState<number | undefined>(undefined);
  const [copyMessage, setCopyMessage] = useState<boolean>(false);
  const [pixels, setPixels] = useState<PixelData | undefined>(undefined);

  const copy = () => {
    var elem = document.createElement('textarea');
    document.body.appendChild(elem);
    if(units === 'rgb') elem.value = `rgb(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b})`;
    else if (units === 'hex') elem.value = `#${fullColorHex(primaryColor.r, primaryColor.g, primaryColor.b)}`;
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
    setCopyMessage(true);
    setTimeout(() => {
      setCopyMessage(false);
    }, 1000);
  };

  const getColor = (img: string): void => {
    setError(false);
    setLoading(true);
    fetchColorAndPixelsFromImage(img, 1)
      .then(res => {
        setPrimaryColor(res.colors[0]);
        setPixels(res.pixels);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        if (errorCount < 2) {
          setErrorCount(prev => prev + 1);
          getColor(img);
        } else {
          setError(true);
          setLoading(false);
        }
      });
  };
  
  useEffect(() => {
    if (image.thumb) {
      if (isWhite(image?.color)) {
        setLoading(true);
        getColor(image.thumb);
      } else {
        setLoading(false);
        setPrimaryColor(() => {
          let color = hexToRGB(image.color)
            .split('rgb(')[1]
            .split(')')[0]
            .split(',');
          return { r: color[0], g: color[1], b: color[2] };
        });
        imagine(image.thumb).then(res => setPixels(res));
      }
    }
  }, [image]);

  useEffect(() => {
    setSize(rand(2, 1));
  }, []);
  return (
    <div 
      className={`relative rounded-lg ${isLoading || error ? 'animate-pulse' : ''}`} 
      style={wrapper(primaryColor, size)}
    >
      <div className={`relative w-full h-full rounded-lg ${isLoading ? 'animate-pulse' : ''}`}
        style={backdrop(showImage, image, primaryColor, size)}
      >
        <div className={'group w-full h-full flex overflow-hidden flex-col'}>
          {copyMessage ? <div className="absolute w-full h-full flex items-center justify-center">
            <p className="text-blueGray-100 font-semibold animate__animated animate__fadeInUp text-lg">
              Copied {units == 'rgb' ? 'RGB' : 'Hex'}!
            </p>
          </div> : ''}
          <CardOptions 
            showImage={showImage}
            setShowImage={setShowImage}
            image={image}
            copy={copy}
          />
          <div className="flex-grow"></div>
          <div className="flex p-4">
            <Palette 
              pixels={pixels}
              color={primaryColor}
              changeColor={setPrimaryColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorCard;