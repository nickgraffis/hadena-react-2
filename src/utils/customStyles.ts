import { Image, RGB } from '../hadena';

export const wrapper = (primaryColor: RGB, size?: number) => {
  return {
    backgroundSize: 'cover',
    background: `rgb(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b})`,
    gridRow: `span ${size}`
  };
};

export const backdrop = (showImage: boolean, image: Image, primaryColor: RGB, size?: number) => {
  return {
    backgroundSize: 'cover',
    background: showImage ? `${`url('${image.image}') no-repeat`}` : 
      'transparent',
    gridRow: `span ${size}`
  };
};