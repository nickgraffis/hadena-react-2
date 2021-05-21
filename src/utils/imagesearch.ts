import hadena from 'hadenajs';

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

export const search = (query: string, page?: number, pp?: number): Promise<UnSplashData> => {
  return new Promise(async (resolve) => {
    console.log('fetching');
    let json = await fetch(
      '/api/search?q=' + query + 
      (page ? `&page=${page}` : '') +
      (pp ? `&pp=${pp}` : '')
    );
    console.log('returing to json');
    let data: UnSplashData = await json.json();
    resolve(data);
  });
};

export const imagine = (photo: string): Promise<RGB> => {
  return new Promise((resolve) => {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
  
    let image = new Image();
    let googleProxyURL =
      'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';
    image.crossOrigin = 'Anonymous';
    image.src = googleProxyURL + encodeURIComponent(photo);
    image.onload = () => {
      let aspectRatio = image.height / image.width;
      canvas.width = 100;
      canvas.height = aspectRatio * canvas.width;
      if (context) {
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
      }
  
      let pixels = hadena.extractPixelData(canvas);
      let mainColor = hadena.pixelsToColors(pixels, 1);
      resolve(mainColor[0]);
    };
    image.onerror = (err) => {
      console.log(err);
    };
  });
};