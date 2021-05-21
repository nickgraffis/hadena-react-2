// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import { Handler } from '@netlify/functions';
import axios from 'axios';
import { extractPixelData, pixelsToColors } from 'hadenajs';
import { createCanvas, loadImage } from 'canvas';

const imagine = (photo: string, full: string, link: string) => {
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
      let mainColor = pixelsToColors(pixels, 1);
      resolve({
        displayColor: mainColor[0],
        image: full,
        palette: [],
        link
      });
    });
  });
};

const url = 'https://api.unsplash.com/search/photos?client_id=';
const handler: Handler = async (event) => {
  try {
    const eq = event.queryStringParameters;
    const data = await axios.get(
      url + process.env.API_KEY + 
      `&page=${eq?.page || 1}&per_page=${eq?.pp || 10}` + 
      `&query=${eq?.q}`
    );
    const colors = [];
    const photos = data.data.results;

    for (let i = 0; i < photos.length; i++) {
      let color = await imagine(
        photos[i].urls.thumb, 
        photos[i].urls.regular, 
        photos[i].links.html
      );
      colors.push(color);
    }
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
