const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const DBCONNECT = require('./Config/dbConnect');
require('dotenv').config()
// routes
const indexRoute = require('./Routes/indexRoute');

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(cors(
    {
        origin: 'http://localhost:3000', // allow the server to accept request from different origin
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true, // allow session cookie from browser to pass through
    },
));
DBCONNECT()
// routing
app.use('/', indexRoute);

const server = http.createServer(app)
server.listen(5000, () => {
    console.log('Server started on port 5000');
})


module.exports = app;