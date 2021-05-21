// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import { Handler } from '@netlify/functions';
import axios from 'axios';
import { linkSync } from 'fs';

const handler: Handler = async (event) => {
  try {
    const url = 'https://api.unsplash.com/search/photos?client_id=';
    const eq = event.queryStringParameters;
    const data = await axios.get(
      url + process.env.API_KEY + 
      `&page=${eq?.page || 1}&per_page=${eq?.pp || 10}` + 
      `&query=${eq?.q}`
    ).then(res => res.data.results.map((photo: any, i: number) => {
      return {
        blur: photo.blur_hash,
        color: photo.color,
        link: photo.links.html,
        image: photo.urls.regular,
        thumb: photo.urls.thumb,
        user: photo.user
      };
    }));
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, body: JSON.stringify({message: error}) };
  }
};

module.exports = { handler };
