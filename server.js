const express = require('../../../Library/Caches/typescript/2.9/node_modules/@types/express');

const app = express();

const port = process.env.PORT || 5645;

app.use('/', express.static('public'));

app.listen(port, () => console.log(`Lisening on http://127.0.0.1:${port}`));
