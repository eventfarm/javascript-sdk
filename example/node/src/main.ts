
require('dotenv').config();

import { BackEndClient } from '@eventfarm/javascript-sdk/dist/api-for-node';
import { ClientAccessToken } from '@eventfarm/javascript-sdk/dist/Rest/Client/ClientAccessToken';


const client = new BackEndClient(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.EMAIL,
  process.env.PASSWORD,
  process.env.AUTH_DOMAIN,
  process.env.API_DOMAIN,
);

client.useCaseFactory
  .Feature()
  .ListFeatures()
  .then((apiResponse: any) => {
    console.log(apiResponse.data);
  })
  .catch(err => {
    console.log(err.response.data);
  });
