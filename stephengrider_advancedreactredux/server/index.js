import express from 'express';
import http from 'http';
import morgan from 'morgan';
import router from './router';

const app = express();
const PORT = process.env.PORT || 3000;

// APP SETUP
app.use(morgan('combined'));
app.use(express.json({type: '*/*'}));
router(app);


// SERVER SETUP
const server = http.createServer(app);
server.listen(PORT);
console.log('Server listening on:', PORT);