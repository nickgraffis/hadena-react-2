// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import { Handler } from '@netlify/functions';
import {extractPixelData, pixelsToColors } from 'hadenajs';
import { createCanvas, loadImage } from 'canvas';

const handler: Handler = async (event) => {
  try {
    const imagine = (photo: string) => {
      return new Promise((resolve) => {
        let canvas = createCanvas(200, 200);
        let context = canvas.getContext('2d');
        loadImage(photo).then((image) => {
          let aspectRatio = image.height / image.width;
          canvas.width = 100;
          canvas.height = aspectRatio * canvas.width;
          if (context) {
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
          }
        
          let pixels = extractPixelData(canvas);
          let mainColor = pixelsToColors(pixels, 6);
          resolve(mainColor);
        });
      });
    };
      
    const eq = event.queryStringParameters;
    let color;
    if (eq?.photo) color = await imagine(eq.photo); 
    return {
      statusCode: 200,
      body: JSON.stringify({ color }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, body: JSON.stringify({message: error}) };
  }
};

module.exports = { handler };