import { extractPixelData } from 'hadenajs';
import { PixelData } from '../hadena';

export const imagine = (photo: string): Promise<PixelData> => {
  return new Promise((resolve) => {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
  
    let domImage = new Image();
    let googleProxyURL =
    'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';
    domImage.crossOrigin = 'Anonymous';
    domImage.src = googleProxyURL + encodeURIComponent(photo);
    domImage.onload = () => {
      let aspectRatio = domImage.height / domImage.width;
      canvas.width = 100;
      canvas.height = aspectRatio * canvas.width;
      if (context) {
        context.drawImage(domImage, 0, 0, canvas.width, canvas.height);
      }
      let pixels = extractPixelData(canvas);
      resolve(pixels);
    };
    domImage.onerror = (err) => {
      console.log(err);
    };
  });
};