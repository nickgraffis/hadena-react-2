// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import { Handler } from '@netlify/functions';
import { pixelsToColors } from 'hadenajs';

const handler: Handler = async (event) => {
  try {
    const imagine = (pixels: any[], k: number) => {
      return new Promise((resolve) => {
        let mainColor = pixelsToColors(pixels, k);
        resolve(mainColor);
      });
    };
      
    const body = event.body ? JSON.parse(event.body) : null;
    let colors = [];
    let now = Date.now();
    for (let i = 0; i < body.pixels.length; i++) {
      let color = await imagine(body.pixels[i], body.k); 
      colors.push(color);
    }
    console.log('Took ', Date.now() - now);
    return {
      statusCode: 200,
      body: JSON.stringify({ colors }),
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