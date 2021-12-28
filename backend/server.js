const express = require('express');
const path = require('path');
var fs = require('fs');

const app = express();
const port = 80;

app.use(express.static(path.join(__dirname, "../frontend/")));

app.listen(port, () => {});