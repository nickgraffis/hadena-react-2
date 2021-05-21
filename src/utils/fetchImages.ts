type ImageData = {
  blur: string,
  color: string,
  link: string,
  thumb: string,
  image: string,
  user: any
}

type JSONResponse = {
  data?: {
    images: ImageData[]
  }
  errors?: Array<{message: string}>
} 
  
export const fetchImages = async (query: string): Promise<ImageData[]> => {
  const response = await fetch(`/api/search?q=${query}&pp=24`);
  const { data, errors }: JSONResponse = await response.json();
  if (response.ok) {
    const images = data?.images;
    if (images) return images;
    else return Promise.reject(new Error(`No images found with the query: "${query}"`));
  } else {
    const error = new Error(errors?.map((e: { message: string }) => e.message).join('\n') ?? 'unknown');
    return Promise.reject(error);
  }
};