import { extractPixelData } from 'hadenajs';

export type UnSplash = {
  urls: {
    small: string,
    thumb: string,
    raw: string,
    full: string,
    regular: string
  },
  color: string
}

export type UnSplashData = {
  photos: { results: UnSplash[] }
}

export type RGB = {
  r: number,
  g: number,
  b: number,
  a: number,
  p: number
}

export const imagine = (photo: string): Promise<RGB> => {
  return new Promise((resolve) => {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
  
    let domImage = new Image();
    let googleProxyURL =
    'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';
    domImage.crossOrigin = 'Anonymous';
    domImage.src = googleProxyURL + encodeURIComponent(photo);
    let now = Date.now();
    console.log('loading image @ ', now);
    domImage.onload = () => {
      let aspectRatio = domImage.height / domImage.width;
      canvas.width = 100;
      canvas.height = aspectRatio * canvas.width;
      if (context) {
        context.drawImage(domImage, 0, 0, canvas.width, canvas.height);
      }
      let pixels = extractPixelData(canvas);
      resolve(pixels);
      console.log('done @ ', Date.now() - now);
    };
    domImage.onerror = (err) => {
      console.log(err);
    };
  });
};