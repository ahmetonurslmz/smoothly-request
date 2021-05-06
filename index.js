const http = require('http');
const https = require('https');


const request = async ({ hostname, path, method = 'GET', payload = null }) => {
    const isHttps = hostname.startsWith('https://');

    const lib = isHttps ? https : http;
    const domain = hostname.split('://')[1];

    const options = {
        method,
        hostname: domain,
        port: isHttps ? 443 : 80,
        path: path || '/',
        headers: {
            'User-Agent': 'AOS',
        }
    };

    return new Promise((resolve, reject) => {
        const req = lib.request(options, res => {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                return reject(new Error(`Status Code: ${res.statusCode}`));
            }

            const data = [];

            res.on('data', chunk => {
                data.push(chunk);
            });

            res.on('end', () => resolve(Buffer.concat(data).toString()));
        });

        req.on('error', reject);

        if (payload && method !== 'GET') {
            req.write(payload);
        }

        req.end();
    });
};

module.exports = request;
