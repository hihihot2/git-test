console.log('index.js create');

const express = require('express');
const app = express();

app.listen(80, () => {
    console.log('server started on port 80');
});