// pages/api/redirect.js

export default function handler(req, res) {
    // Perform a 301 permanent redirect to the new URL
    res.writeHead(301, { Location: 'https://passgrades.com' });
    res.end();
  }
  