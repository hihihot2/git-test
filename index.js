console.log('index.js create');

const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser());

app.listen(80, () => {
    console.log('server started on port 80');
});