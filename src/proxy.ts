import {
  createProxyMiddleware,
  responseInterceptor,
} from 'http-proxy-middleware';
import * as dotenv from 'dotenv';
import db from './db.js';

dotenv.config();

const filter = (pathname): boolean => {
  if (pathname !== '/logs') {
    return true;
  }
  return false;
};

const proxy = createProxyMiddleware(filter, {
  target: process.env.API_SERVICE_URL,
  changeOrigin: true,
  selfHandleResponse: true,
  onProxyRes: responseInterceptor(async (responseBuffer, _proxyRes, req) => {
    const response = responseBuffer.toString('utf8');

    db.read();
    db.data?.logs.push({
      id: db.data?.logs.length.toString() || '--',
      headers: req.headers,
      url: req.url,
      res: response,
      authorization: req.headers.authorization || '',
      host: req.headers.host || '',
      userAgent: req.headers['user-agent'] || '',
    });
    db.write();
    return response;
  }),
});

export default proxy;
