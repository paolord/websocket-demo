import express from 'express';
var cors = require('cors');
import { createClient } from 'redis';
const client = createClient();
client.on('error', (err) => console.log('Redis Client Error', err));

(async function() {
  await client.connect();
})();

const app = express();
app.use(cors())

app.listen(8060, () => {
  console.log('Data server started');
})

app.get('/data', async (req, res) => {
  const len = await client.lLen('data');
  const data = await client.lRange('data', 0, 99);
  res.json(data);
});