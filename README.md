[![Build Status](https://travis-ci.com/ahmetonurslmz/smoothly-request.svg?branch=main)](https://travis-ci.com/ahmetonurslmz/smoothly-request)
[![Dependencies](https://david-dm.org/ahmetonurslmz/smoothly-request.svg)](https://david-dm.org/ahmetonurslmz/smoothly-request)
[![devDependencies](https://status.david-dm.org/gh/ahmetonurslmz/smoothly-request.svg?type=dev)](https://david-dm.org/ahmetonurslmz/smoothly-request)
[![npm version](https://badge.fury.io/js/smoothly-request.svg)](https://badge.fury.io/js/smoothly-request)

Smoothly request
=============
Perform request with promise based client on NodeJS

Smoothly request enables developer to send request with promise based client on NodeJS. The package generally was designed for cloud functions (aws lambda, google functions etc.), and it has a little unpacked size.

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

```js
const smoothlyhRequest = require('smoothly-request');

(async () => {
  const result = await smoothlyhRequest({
      hostname: `https://ahmetonursolmaz.com.tr`,
      path: '/users/2',
      method: 'PATCH',
      payload: {},
  });
})();


(async () => {
    const result = await smoothlyhRequest({
        hostname: `https://ahmetonursolmaz.com.tr`,
        path: '/users/2',
        method: 'DELETE',
        payload: {},
    });
})();
```
