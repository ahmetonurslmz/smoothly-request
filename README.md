# Smoothly Request
Perform request with promise based client on NodeJS

Smoothly request enables developer to send promise based requests to another point. The package generally has been designed for cloud functions (lambda, google functions etc.), and it has little unpacked size.
The package presents easy and lightweight way to handle sending requests processes. These uses core node modules that called http and https.

## Installing

Using npm:

```bash
$ npm install smoothly-request
```

## Example

Performing a `GET` request

```js
const smoothlyhRequest = require('smoothly-request');

(async () => {
  const result = await smoothlyhRequest({
      hostname: `https://ahmetonursolmaz.com.tr`,
      path: '/users/2',
      method: 'GET'
  });
})();
```

Performing a `POST` request

```js
const smoothlyhRequest = require('smoothly-request');

(async () => {
  const result = await smoothlyhRequest({
      hostname: `https://ahmetonursolmaz.com.tr`,
      path: '/users',
      method: 'POST',
      payload: {},
  });
})();
```

Performing `an another` request

Just change method on options
