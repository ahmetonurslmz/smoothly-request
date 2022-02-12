const http = require('http');
const https = require('https');


const pathChecker = (path) => {
    if (path && path[0] === '/') {
        return path;
    } else if (path) {
        return `/${path}`;
    }
    return '/';
};


const request = async ({ hostname, path = '/', method = 'GET', payload = null, isJson = false, headers = {} }) => {
    const urlParts = new URL(hostname);

    const isHttps = urlParts.protocol === 'https:';
    const lib = isHttps ? https : http;

    const options = {
        method,
        hostname: urlParts.hostname,
        port: (urlParts.port || (isHttps ? 443 : 80)),
        path: pathChecker(path),
        headers: {
            'User-Agent': 'AOS',
            ...headers,
        }
    };

    if (isJson) {
        options.headers['Content-Type'] = 'application/json';
    }

    return new Promise((resolve, reject) => {
        const req = lib.request(options, res => {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                return reject(new Error(`Status Code: ${res.statusCode}`));
            }

            const data = [];

            res.on('data', chunk => {
                data.push(chunk);
            });

            res.on('end', () => resolve((() => {
                if (isJson) {
                    return JSON.parse(Buffer.concat(data).toString());
                }
                return Buffer.concat(data).toString();
            })()));
        });

        req.on('error', reject);

        if (payload && method !== 'GET') {
            const payloadData = (() => {
                if (isJson) {
                    return JSON.stringify(payload);
                }
                return payload;
            })();
            req.write(payloadData);
        }

        req.end();
    });
};

module.exports = request;
