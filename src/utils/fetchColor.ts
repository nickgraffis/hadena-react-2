import { PixelData, RGB } from '../hadena';
import { imagine } from './imagesearch';
  
type JSONResponse = {
  data?: {
    colors: RGB[][]
  }
  errors?: Array<{message: string}>
} 
    
export const fetchColorAndPixelsFromImage = async (img: string, k: number): Promise<{colors: RGB[], pixels: PixelData}> => {
  const pixels = await imagine(img);
  const response = await fetch('/api/palette', {
    method: 'POST',
    body: JSON.stringify({
      pixels: [pixels],
      k: k
    })
  });
  const { data, errors }: JSONResponse = await response.json();
  if (response.ok) {
    const colors = data?.colors;
    if (colors?.length) {
      const color = colors[0];
      return { colors: color, pixels };
    }
    else return Promise.reject(new Error('No colors found.'));
  } else {
    const error = new Error(errors?.map((e: { message: string }) => e.message).join('\n') ?? 'unknown');
    return Promise.reject(error);
  }
};

export const fetchColorFromPixels = async (pixels: PixelData, k: number): Promise<RGB[][]> => {
  const response = await fetch('/api/palette', {
    method: 'POST',
    body: JSON.stringify({
      pixels: [pixels],
      k: k
    })
  });
  const { data, errors }: JSONResponse = await response.json();
  if (response.ok) {
    const colors = data?.colors;
    if (colors) return colors;
    else return Promise.reject(new Error('No colors found.'));
  } else {
    const error = new Error(errors?.map((e: { message: string }) => e.message).join('\n') ?? 'unknown');
    return Promise.reject(error);
  }
};