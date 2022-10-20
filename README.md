# Task in brief

- Create a proxy with https://test.dintero.com
- Log all request
- Get last 10 requests with same authorization

# Techstack

- [Nodejs Typescript boilerplate](https://github.com/jsynowiec/node-typescript-boilerplate)
- [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)
- [LowDB](https://github.com/typicode/lowdb)

# How to run

- `npm i`
- `npm run build`
- `npm start`

# Examples

## Using Dintero API

```
curl -u 'a55e97bd-7c97-4d01-84b7-838c2815104e:0352307c-b87b-4f3d-b813-d4f5a6ebecf6' \
  -H 'Content-Type: application/json' \
  http://localhost:3000/v1/accounts/P11223674/auth/token \
  -d '{"grant_type":"client_credentials","audience":"https://test.dintero.com/v1/accounts/P11223674"}'
```

## Getting latest 10 logs

```
curl http://localhost:3000/logs -H "Authorization: Basic $TOKEN"
```

TOKEN is auth token
# Dintero
# Dintero
# DinteroTask
