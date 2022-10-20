import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const api = express();

api.set('port', parseInt(process.env.PORT || '3000'));
api.set('host', process.env.HOST || '0.0.0.0');
api.get('/ping/', (_, res) => res.status(200).json('pong'));

export default api;
