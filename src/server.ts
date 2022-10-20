import * as dotenv from 'dotenv';

import api from './api.js';
import db from './db.js';
import proxy from './proxy.js';

dotenv.config();
api.use('/', proxy);

api.get('/logs', async (req, res) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.sendStatus(403);
  }
  db.read();
  const logs = db.chain
    .get('logs')
    .filter((log) => {
      return log.authorization === authorization;
    })
    .value();
  res.send(logs.slice(0, 10));
});

const server = api.listen(api.get('port'), api.get('host'), () => {
  console.log(`App is running on port ${process.env.PORT}`);
});

export default server;
