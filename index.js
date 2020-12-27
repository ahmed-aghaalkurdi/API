const express = require('express');
const app = express();
const port =8000;
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/me', require('./routes/api'));

app.listen(port, console.log(`server is running on port ${port}`));